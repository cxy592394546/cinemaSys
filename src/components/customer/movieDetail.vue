<template>
  <el-container>
    <el-main height="100%">
      <el-card shadow="never">
        <img :src="movieLogo" style="width: 25%;display: block;" />
        <div slot="header" class="clearfix">
          <span>{{ movieName }}</span>
        </div>
        <div clas="text">
          <span>上映时间：{{ releaseTime }}</span>
        </div>
        <div v-html="this.movieInfo">{{ this.movieInfo }}</div>
        <template v-if="detectButton0">
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
        <template v-if="detectButton1">
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
          <span @click="buyTicket()">购票</span>
        </el-button>
        <el-button type="warning" round>
          <span @click="likeMovie()">收藏</span>
        </el-button>
      </el-card>
    </el-main>
    <el-footer>
      <el-card
        shadow="never"
        style="height:auto;overflow-y:auto;overflow-x:hidden;"
      >
        <el-container>
          <el-header>
            <span>影片评论</span>
            <el-button type="info" style="float:right" @click="presentReview()"
              >发表评论</el-button
            >
          </el-header>
          <el-main>
            reviews
          </el-main>
        </el-container>
      </el-card>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      movieName: window.sessionStorage.getItem("movieName"),
      movieId: window.sessionStorage.getItem("movieId"),
      releaseTime: window.sessionStorage.getItem("releaseTime"),
      movieInfo: window.sessionStorage.getItem("movieInfo"),
      movieLogo: window.sessionStorage.getItem("movieLogo"),

      websites: "",
      likeFlag: false,
      date: "",
    };
  },

  computed: {
    detectButton0() {
      return this.websites.hasOwnProperty("时光网");
    },
    detectButton1() {
      return this.websites.hasOwnProperty("京东电影");
    },
  },

  mounted() {
    this.loadButton();
    this.getDate();
  },

  methods: {
    async loadButton() {
      let response = await this.$axios.get(
        "http://channel.qingxu.website:8084/testGetApi?movieName=" +
          this.movieName
      );
      this.websites = response.data;
    },
    jumpToShiGuang() {
      window.open(this.websites["时光网"].buyurl, "_blank");
    },
    jumpToJingDong() {
      window.open(this.websites["京东电影"].buyurl, "_blank");
    },
    async likeMovie() {
      let response = await this.$axios
        .post("http://film.qingxu.website:8083/demo/addNewCMovie", {
          id: this.movieId,
          name: this.movieName,
          time: this.date,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
    buyTicket(){
      window.sessionStorage.setItem("movieId", this.movieId),
      window.sessionStorage.setItem("movieName", this.movieName),
      this.$router.push("/buyTicket");
    },
    presentReview() {
      window.sessionStorage.setItem("movieId", this.movieId),
      window.sessionStorage.setItem('commentDate', this.date)
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
    // async loadComment() {
    //    let response = await this.$axios.get(
    //       "http://channel.qingxu.website:20086/demo/allComment"
    //     )
    //     this.comments = response.data;
    // },
    handleCommand(command) {
      this.showDot = true;
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
