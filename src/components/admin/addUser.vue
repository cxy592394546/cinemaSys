<template>
  <el-card>
    <h3>新建用户</h3>
    <el-input
      placeholder="请输入用户的用户名"
      v-model="username"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      placeholder="请输入用户密码"
      v-model="password"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="addAdmin()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async addAdmin() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:20086/v1/usercontroller/user", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {})
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/userManage" });
    },
  },
};
</script>

<style></style>
