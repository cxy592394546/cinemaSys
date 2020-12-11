<template>
  <el-container>
    <el-main>
      <el-card shadow="never">
        <img :src="movieLogo" style="width: 25%;display: block;" />
        <div slot="header" class="clearfix">
          <span>{{ movieName }}</span>
        </div>
        <div clas="text">
          <span>上映时间：{{ releaseTime }}</span>
        </div>
        <div v-html="this.movieInfo">{{ this.movieInfo }}</div>
        <el-button type="danger" @click="deleteMovie()">删除影片</el-button>
      </el-card>
    </el-main>
    <el-footer>
      <el-card>

      </el-card>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      movieName: window.sessionStorage.getItem("movieName"),
      releaseTime: window.sessionStorage.getItem("releaseTime"),
      movieInfo: window.sessionStorage.getItem("movieInfo"),
      movieId: window.sessionStorage.getItem("movieId"),
      movieLogo: window.sessionStorage.getItem("movieLogo"),

      comments: "",
      likeFlag: false,
    };
  },

  props: ["catchData"],

  mounted() {

  },

  methods: {
    async deleteMovie() {
      let response = await this.$axios.get(
          "http://cinema.qingxu.website:8083/demo/deleteMovie?id=" +
            this.movieId
        )
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
        this.$router.push({ path: "/MovieManage" });
    },
    //async loadComment() {
    //    let response = await this.$axios.get(
    //       "http://channel.qingxu.website:20086/demo/allComment"
    //     )
    //     this.comments = response.data;
    // },
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
</style>
