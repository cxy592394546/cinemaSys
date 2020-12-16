<template>
  <el-card>
    <h2>你好，管理员———{{ nickname }}</h2>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" round @click="changeName()">修改昵称</el-button>
    <el-button type="info" round @click="changePassword()">修改密码</el-button>
    <div style="margin: 20px 0;"></div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      nickname: window.sessionStorage.getItem("nickname"),
    };
  },

  methods: {
    changeName(){
      this.$router.push("/adminChangeName")
    },
    changePassword(){
      this.$router.push("/adminChangePassword")
    }
  }
};
</script>

<style></style>
