<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>影片列表</h3>
      <el-button type="success" style="float:right" @click.native="addMovie()">
        添加影片
      </el-button>
    </div>
    <el-row :gutter="20" class="el-row" type="flex">
      <el-col
        :span="6"
        v-for="(o, index) in info.length"
        :key="o"
        class="el-col"
      >
        <el-card class="el-card" :key="index">
          <img :src="info[o - 1].logo" class="image" />
          <div style="padding: 14px;">
            <span>{{ info[o - 1].name }}</span>
            <div class="bottom clearfix">
              <time class="time">上映时间：{{ info[o - 1].time }}</time>
              <el-col>
                <el-button
                  type="text"
                  class="button"
                  @click.native="movieDetail(o)"
                >
                  查看详情
                </el-button>
                <el-button
                  type="text"
                  class="button"
                  @click.native="deleteMovie(o)"
                >
                  删除影片
                </el-button>
              </el-col>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
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
        "http://cinema.qingxu.website:8083/demo/allMovies"
      );
      this.info = response.data.Movies;
    },
    movieDetail(o) {
      window.sessionStorage.setItem("movieName", this.info[o - 1].name);
      window.sessionStorage.setItem("releaseTime", this.info[o - 1].time);
      window.sessionStorage.setItem("movieInfo", this.info[o - 1].info);
      window.sessionStorage.setItem("movieLogo", this.info[o - 1].logo);
      window.sessionStorage.setItem("movieId", this.info[o - 1].id);
      this.$router.push({ path: "/adminMovieDetail" });
    },
    async deleteMovie(o) {
      let response = await this.$axios.get(
          "http://cinema.qingxu.website:8083/demo/deleteMovie?id=" + this.info[o - 1].id
        )
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
        window.location.reload()
    },
    //async deleteMovie(o) {
    //   let response = await this.$axios.post("http://cinema.qingxu.website:20086/demo/deleteMovies", {
    //     id: this.info[o - 1].id,
    //   });
    // },
    addMovie() {
      this.$router.push({ path: "/addMovie" });
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

.button {
  padding: 0;
  float: right;
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
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
.el-col {
  border-radius: 4px;
  align-items: stretch;
  margin-bottom: 40px;
}
</style>
