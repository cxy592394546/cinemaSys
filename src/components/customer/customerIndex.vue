<template>
  <el-container>
    <el-header>
      <h2>影片推荐</h2>
    </el-header>
    <el-main>
      <el-carousel :interval="4000" type="card" height="600px'">
        <el-carousel-item v-for="item in images" :key="item.id">
          <!-- <img :src="item.url" style="height:auto" /> -->
          <el-avatar shape="square" :size="320" fit="fill" :src="item.url"></el-avatar>
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
        { id: 0, url: require("@/assets/img/1.jpeg") },
        { id: 1, url: require("@/assets/img/2.jpeg") },
        { id: 2, url: require("@/assets/img/3.jpeg") },
        { id: 3, url: require("@/assets/img/4.jpeg") },
        { id: 4, url: require("@/assets/img/5.jpeg") },
        { id: 5, url: require("@/assets/img/6.jpeg") },
      ],
    };
  },
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
