<template>
  <div>
    <el-card shadow="never">
      <img :src="movieInfo.logo" style="width: 25%;display: block;" />
      <div slot="header" class="clearfix">
        <span>ID: {{ movieId }}</span>
        <br />
        <span>{{ movieInfo.name }}</span>
      </div>
      <div clas="text">
        <span>上映时间：{{ movieInfo.time }}</span>
      </div>
      <div v-html="this.movieInfo.info">{{ this.movieInfo.info }}</div>
      <template v-if="flag1">
        <el-button type="success" round>
          <span @click="jumpToShiGuang()">
            从时光网购票
          </span>
        </el-button>
      </template>
      <template v-else>
        <el-button type="success" round disabled>
          <span @click="jumpToShiGuang()">
            从时光网购票
          </span>
        </el-button>
      </template>
      <template v-if="flag2">
        <el-button type="success" round>
          <span @click="jumpToJingDong()">
            从京东电影购票
          </span>
        </el-button>
      </template>
      <template v-else>
        <el-button type="success" round disabled>
          <span @click="jumpToJingDong()">
            从京东电影购票
          </span>
        </el-button>
      </template>
      <el-button type="info" round>
        <span @click="buyTicket">前往购票</span>
      </el-button>
      <el-button type="warning" round>
        <span @click="likeMovie()">收藏</span>
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: window.sessionStorage.getItem("movieId"),
      movieName: window.sessionStorage.getItem("movieName"),

      movieInfo: [],
      websites: [],
      likeFlag: false,
      date: "",

      flag1: false,
      flag2: false,
    };
  },

  mounted() {
    this.loadMovie();
    this.loadButton();
    this.getDate();
  },

  methods: {
    async loadMovie() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/movie-controller/movie-detail?id=" +
          this.movieId
      );
      this.movieInfo = response.data.movieDetails;
    },

    async loadButton() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/channelservice/channel",
        {
          params: {
            movieName: this.movieName,
          },
        }
      );
      this.websites = response.data;
      var info;
      for (info in this.websites) {
        if (
          this.websites[info].channel &&
          this.websites[info].channel == "时光网电影"
        ) {
          this.flag1 = true;
        } else if (
          this.websites[info].channel &&
          this.websites[info].channel == "京东电影"
        ) {
          this.flag2 = true;
        }
      }
    },

    jumpToShiGuang() {
      window.open(this.websites[1].buyurl, "_blank");
    },

    jumpToJingDong() {
      window.open(this.websites[0].buyurl, "_blank");
    },
    async likeMovie() {
      let response = await this.$axios
        .post(
          "http://cinema.qingxu.website:20086/v1/collected-movie-controller/cmovie",
          {
            id: this.movieId,
            name: this.movieInfo.name,
            time: this.date,
            uid: window.sessionStorage.getItem("id"),
          }
        )
        .then((response) => {
          alert("收藏成功！")
          this.$router.push("/favourites");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
    buyTicket() {
      this.$router.push("/sessionMess");
    },
    presentReview() {
      window.sessionStorage.setItem("movieId", this.movieId),
        window.sessionStorage.setItem("commentDate", this.date);
      this.$router.push("/presentReview");
    },
    getDate() {
      var today = new Date();
      this.date =
        this.zeroPadding(today.getFullYear(), 4) +
        "-" +
        this.zeroPadding(today.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(today.getDate(), 2);
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
