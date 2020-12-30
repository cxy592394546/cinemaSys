<template>
  <el-card>
    <h3>编辑场次时间</h3>
    <el-input placeholder="请输入新的时间" v-model="time" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="editSession()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      sessionId: window.sessionStorage.getItem("sessionId"),
      roomId: window.sessionStorage.getItem("roomId"),
      movieId: window.sessionStorage.getItem("movieId"),
    };
  },

  methods: {
    async editSession() {
      let response = await this.$axios
        .put("http://106.14.220.105:5000/api/editSessionInfo", {
          time: this.time,
          sessionId: this.sessionId,
          roomId: this.roomId,
          movieId: this.movieId,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/sessionList" });
    },
  },
};
</script>

<style></style>
