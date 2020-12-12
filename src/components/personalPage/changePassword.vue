<template>
  <el-card>
    <h3>新建用户</h3>
    <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input placeholder="请输入密码" v-model="password" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input placeholder="请输入新密码" v-model="newpassword" clearable></el-input>
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
    async changePassord() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:8086/demo/changePassword", {
          newpassword: this.newpassword,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          alert(response.data.msg);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/personalMess" });
    },
  },
};
</script>

<style></style>
