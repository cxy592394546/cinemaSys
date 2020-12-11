<template>
  <el-row :gutter="20" class="el-row" type="flex">
    <el-col :span="6" v-for="(o, index) in info.length" :key="o" class="el-col">
      <el-card class="el-card" :key="index">
        <img src="../../assets/img/logo.png" class="image" />
        <div style="padding: 14px;">
          <span>{{ info[o - 1].name }}</span>
          <div class="bottom clearfix">
            <time class="time">收藏时间：{{ info[o - 1].time }}</time>
            <el-col>
              <!-- <el-button
                type="text"
                class="buttonR"
                @click.native="movieDetail(o)"
              >
                查看详情
              </el-button> -->
              <el-button
                type="text"
                class="buttonL"
                @click.native="RemoveMovie(o)"
              >
                取消收藏
              </el-button>
            </el-col>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      movieName: "",
    };
  },
  mounted() {
    this.loadData();
  },
  beforeDestroy() {},
  methods: {
    async loadData() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:8083/demo/allCMovies"
      );
      this.info = response.data.CollectedMovies;
    },
    movieDetail(o) {
      window.sessionStorage.setItem("movieName", this.info[o - 1].name);
      window.sessionStorage.setItem("releaseTime", this.info[o - 1].time);
      window.sessionStorage.setItem("movieInfo", this.info[o - 1].info);
      this.$router.push({ path: "/movieDetail" });
    },
    async RemoveMovie(o) {
      let response = await this.$axios
        .get(
          "http://cinema.qingxu.website:8083/demo/deleteCMovie?id=" +
            this.info[o - 1].id
        )
        // let response = await this.$axios
        //   .post("http://film.qingxu.website:8083/demo/deleteCMovie", {
        //     id: this.info[o - 1].id,
        //   })
        .then((response) => {
          console.log(response.data);
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
        this.$router.push("/favourites")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.buttonR {
  padding: 0;
  float: right;
}

.buttonL {
  padding: 0;
  float: left;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-card {
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  /*transition: all .5s;*/
}
.el-card:hover {
  margin-top: -5px;
}
.el-row {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.el-col {
  border-radius: 4px;
  align-items: stretch;
  margin-bottom: 40px;
}
</style>
