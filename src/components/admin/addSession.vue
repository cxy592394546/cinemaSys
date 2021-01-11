<template>
  <el-card>
    <h3>新建场次</h3>
    <el-input
      placeholder="请输入放映厅Id"
      v-model="roomId"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input placeholder="请输入场次时间" v-model="time" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="addSession()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      roomId: "",
      time: "",

      movieId: window.sessionStorage.getItem("movieId"),
    };
  },

  methods: {
    async addSession() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:20086/v1/session", {
          roomId: Number(this.roomId),
          time: this.time,
          movieId: Number(this.movieId),
        })
        .then((response) => {
          this.$router.push({ path: "/sessionList" });
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
  },
};
</script>

<style></style>
