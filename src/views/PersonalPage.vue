<template>
  <el-container class="index-container">
    <el-header>
      <div>
        <img src="../assets/img/logo.png" height="60" />
      </div>
      <el-menu
        router
        mode="horizontal"
        background-color="rgb(43,43,43)"
        text-color="rgb(239,239,239)"
        active-text-color="#409EFF"
      >
        <el-menu-item index="/customerIndex">回到首页</el-menu-item>
        <el-menu-item id="exit-div" divided @click.native="logOut"
          >退出</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-container class="main-container">
      <el-aside width="20%">
        <el-menu
          router
          default-active="/personalIndex"
          background-color="rgb(60,60,60)"
          text-color="rgb(220,220,220)"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/personalIndex">主页</el-menu-item>
          <el-menu-item index="/personalMess">个人信息</el-menu-item>
          <el-menu-item index="/ticketMess">影票列表</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      showDot: false,
      username: window.sessionStorage.getItem("name"),
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },
  methods: {
    //退出按钮
    logOut() {
      window.sessionStorage.clear();
      this.$router.push("/welcomeIndex");
    },
    changePassword() {
      // this.$router.push("/memberChangePassword")
    },
    memberInfomation() {
      this.$router.push("/customerIndex");
    },
    handleCommand(command) {
      this.showDot = true;
    },
  },
};
</script>
<style scoped>
.index-container {
  height: 100%;
}
.main-container {
  height: 100%;
}
#username-div {
  font-size: 20px;
  font-weight: bold;
  font-family: 楷体;
}

#exit-div {
  text-align: center;
  font-weight: bold;
}

.el-header {
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 40px;
  color: rgb(239, 239, 239);
}

.el-aside {
  background-color: rgb(60, 60, 60);
  width: 20%;
}

.el-menu-item {
  transition: none !important;
}

.el-main {
  background-color: #83a2fa;
}

.el-aside {
  background-color: rgb(60,60,60);
}

.out-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
