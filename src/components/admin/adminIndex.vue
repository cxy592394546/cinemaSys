<template>
  <el-card>
    <h2>你好，管理员———{{ nickname }}</h2>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" round @click="changeName()">修改昵称</el-button>
    <el-button type="info" round @click="changePassword()">修改密码</el-button>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" round @click="cinemaManage()">影院管理</el-button>
    <el-button type="info" round @click="userManage()">用户管理</el-button>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" round @click="movieManage()">影片管理</el-button>
    <el-button type="info" round @click="noticeManage()">通知管理</el-button>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" round @click="allTicket()">影票信息</el-button>
    <el-button type="info" round @click="sessionList()">场次信息</el-button>
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
    changeName() {
      this.$router.push("/adminChangeName");
    },

    changePassword() {
      this.$router.push("/adminChangePassword");
    },

    cinemaManage() {
      this.$router.push("/cinemaManage");
    },

    userManage() {
      this.$router.push("/userManage");
    },

    movieManage() {
      this.$router.push("/movieManage");
    },

    noticeManage() {
      this.$router.push("/noticeManage");
    },

    allTicket() {
      this.$router.push("/allTicket");
    },

    sessionList() {
      this.$router.push("/sessionList");
    },
  },
};
</script>

<style></style>
