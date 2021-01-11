<template>
  <el-container>
    <el-header>
      <h2>影片推荐</h2>
    </el-header>
    <el-main>
      <el-carousel :interval="4000" ref="carousel" type="card" height="600px'">
        <el-carousel-item v-for="item in images" :key="item.id">
          <el-avatar shape="square" :size="320" fit="fill" :src="item.url" @click.native="movieDetail(movieId, movieName)"></el-avatar>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 0, url: require("@/assets/img/1.jpeg") ,movieId: "70" ,movieName: "海底小纵队：火焰之环"},
        { id: 1, url: require("@/assets/img/2.jpeg") ,movieId: "74" ,movieName: "晴雅集"},
        { id: 2, url: require("@/assets/img/3.jpeg") ,movieId: "75" ,movieName: "温暖的抱抱"},
        { id: 3, url: require("@/assets/img/4.jpeg") ,movieId: "76" ,movieName: "疯狂原始人2"},
        { id: 4, url: require("@/assets/img/5.jpeg") ,movieId: "77" ,movieName: "神奇女侠1984"},
        { id: 5, url: require("@/assets/img/6.jpeg") ,movieId: "61" ,movieName: "送你一朵小红花"},
      ],
    };
  },

  methods: {
    movieDetail(movieId, movieName){
      let activeIndex = this.$refs.carousel.activeIndex
      window.sessionStorage.setItem("movieId", this.images[activeIndex].movieId)
      window.sessionStorage.setItem("movieName", this.images[activeIndex].movieName)
      this.$router.push("/movieDetail")
    }
  }
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  width: 20%;
  position: absolute;
  right: 50%;
  margin: 0 auto;
}

.el-carousel__item:nth-child(2n + 1) {
  width: 20%;
  position: absolute;
  right: 50%;
  margin: 0 auto;
}
</style>
