<template>
  <el-container class="index-container" direction="vertical">
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
          <el-input placeholder="请输入内容" v-model="keywords" clearable>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchMovies()"
              >搜索
            </el-button>
          </el-input>
        </el-menu-item>
        <el-menu-item index="/personalIndex"
          >你好，{{ username }}
        </el-menu-item>
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
          <el-menu-item index="/customerIndex">主页</el-menu-item>
          <el-menu-item index="/movieMess">影片列表</el-menu-item>
          <el-menu-item index="/cinemaMess">影院列表</el-menu-item>
          <el-menu-item index="/favourites">收藏列表</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="height:100%">
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
      keywords: "",
      movies: "",
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
    async searchMovies() {
      window.sessionStorage.setItem("keywords", this.keywords);
      this.$router.push({ path: "/searchList" });
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

.el-menu-item {
  transition: none !important;
}

.el-main {
  background-color: #83a2fa;
}

.el-aside {
  background-color: rgb(60, 60, 60);
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
