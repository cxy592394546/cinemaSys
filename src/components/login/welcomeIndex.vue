<template>
  <el-container>
    <el-header style="height: 80px;">
      <h2>欢迎使用影院信息管理系统</h2>
    </el-header>
    <el-main>
      <el-button type="info" round @click="register()">注册帐号</el-button>
      <el-button type="info" round @click="login()">登录</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/userLogin")
    },

    register() {
      this.$router.push("/register")
    }
  }
};
</script>

<style></style>
