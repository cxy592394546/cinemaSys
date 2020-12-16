<template>
  <el-card>
    <h3>新建用户</h3>
    <el-input
      placeholder="请输入用户用户名"
      v-model="username"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      placeholder="请输入用户原密码"
      v-model="password"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      placeholder="请输入用户新密码"
      v-model="newpassword"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="changePassword()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      newpassword: "",
    };
  },

  methods: {
    async changePassword() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:8086/demo/UchangePassword", {
          newpassword: this.newpassword,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          alert("修改成功，请重新登录！");
          window.sessionStorage.clear();
          this.$router.push("/welcomeIndex");
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
