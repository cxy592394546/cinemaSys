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
        active-text-color="rgb(43,43,43)"
      >
        <el-menu-item>
          <el-input placeholder="请输入内容" v-model="input" clearable>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchMovies()"
              >搜索
            </el-button>
          </el-input>
        </el-menu-item>
        <el-menu-item index="/adminIndex">你好，{{ nickname }} </el-menu-item>
        <el-menu-item id="exit-div" divided @click.native="logOut"
          >退出</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-container class="main-container">
      <el-aside width="20%">
        <el-menu
          router
          :default-active="$route.path"
          background-color="rgb(60,60,60)"
          text-color="rgb(220,220,220)"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/adminIndex">主页</el-menu-item>
          <el-menu-item index="/cinemaManage">影院管理</el-menu-item>
          <el-menu-item index="/sessionList">场次信息</el-menu-item>
          <el-menu-item index="/movieManage">影片管理</el-menu-item>
          <el-menu-item index="/userManage">用户管理</el-menu-item>
          <el-menu-item index="/noticeManage">通知管理</el-menu-item>
          <el-menu-item index="/allTicket">影票信息</el-menu-item>
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
      nickname: window.sessionStorage.getItem("nickname"),

      info: "",
      input: "",
    };
  },

  methods: {
    //退出按钮
    logOut() {
      window.sessionStorage.clear();
      this.$router.push("/welcomeIndex");
    },
    async searchMovies() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:8083/demo/queryMovie?id=" + this.input
      );
      if (response && response.status === 200) {
        window.sessionStorage.setItem("movieName", response.data.name);
        window.sessionStorage.setItem("releaseTime", response.data.time);
        window.sessionStorage.setItem("movieInfo", response.data.info);
        window.sessionStorage.setItem("movieLogo", response.data.logo);
        this.$router.push({ path: "/adminMovieDetail" });
      }
    },
  },
};
</script>

<style scoped>
.index-container {
  height: 100%;
  top: 0px;
  left: 0px;
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

.el-select .el-input {
  width: 130px;
}
.input-with-select {
  background-color: #fff;
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
}

.el-menu-item {
  transition: none !important;
}

.el-main {
  background-color: rgb(179, 172, 172);
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
