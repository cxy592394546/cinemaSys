<template>
  <el-card class="box-card">
    <div class="block">
      <el-avatar
        shape="square"
        icon="el-icon-user-solid"
        :size="150"
      ></el-avatar>
    </div>
    <div clas="text">用户名：{{ username }}</div>
    <div style="margin: 20px 0;"></div>
    <el-button type="info" @click="changeName">修改用户名</el-button>
    <el-button type="info" @click="changePassword">修改密码</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      username: window.sessionStorage.getItem("name"),
    };
  },

  mounted() {},
  methods: {
    changeName() {
      this.$router.push("/changeName");
    },
    changePassword() {
      this.$router.push("/changePassword");
    },
    handleCommand(command) {
      this.showDot = true;
    },
  },
};
</script>

<style>
.text {
  font-size: 24px;
}

.item {
  margin-bottom: 18px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
