<template>
  <el-row :gutter="20" class="el-row" type="flex">
    <el-col :span="6" v-for="(o, index) in info.length" :key="o" class="el-col">
      <el-card class="el-card" :key="index">
        <img :src="info[o - 1].movie_logo" class="image" />
        <div style="padding: 14px;">
          <span>{{ info[o - 1].movieName }}</span>
          <div class="bottom clearfix">
            <time class="time">上映时间：{{ info[o - 1].movie_time }}</time>
            <el-button type="text" class="button" @click.native="movieDetail(o)"
              >查看详情</el-button
            >
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
      mName: window.sessionStorage.getItem("keywords"),

      info: "",
      movieName: "",
    };
  },
  
  mounted() {
    this.searchMovies()
  },
  
  beforeDestroy() {},

  methods: {
    async searchMovies() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/movie-controller/movie-list",
        {
          params: {
            pageNum: 0,
            pageSize: 100,
            query: this.mName,
          },
        }
      );
      this.info = response.data.movieLists;
    },
    movieDetail(o) {
      window.sessionStorage.setItem("movieName", this.info[o - 1].name);
      window.sessionStorage.setItem("releaseTime", this.info[o - 1].time);
      window.sessionStorage.setItem("movieInfo", this.info[o - 1].info);
      window.sessionStorage.setItem("movieLogo", this.info[o - 1].logo);
      this.$router.push({ path: "/movieDetail" });
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
