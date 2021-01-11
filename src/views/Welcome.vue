<template>
  <el-container class="index-container">
    <el-header>
      <div>
        <img src="../assets/img/logo.png" height="60" />
      </div>
      <el-menu
        v-if="!isLogin"
        router
        class="el-menu-demo"
        mode="horizontal"
        background-color="rgb(43,43,43)"
        text-color="rgb(255,255,255)"
        active-text-color="#0099FF"
        default-active="/welcomeIndex"
      >
        <el-menu-item index="/welcomeIndex">首页</el-menu-item>
        <el-menu-item index="/userLogin">登录</el-menu-item>
        <el-menu-item index="/register">注册</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      name: window.sessionStorage.getItem("name"),
    };
  },
  created() {
    this.name = window.sessionStorage.getItem("name");
    if (this.name != null) {
      this.isLogin = true;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
#username-div {
  font-size: 20px;
  font-weight: bold;
  font-family: 楷体;
}

.index-container {
  height: 100%;
}

.el-aside {
  background-color: rgb(60, 60, 60);
  width: 20%;
}

.el-header {
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  padding-left: 0;
}

.el-main {
  /* background-color: rgb(179, 172, 172); */
  margin: 0;
  padding: 0;
}
</style>
