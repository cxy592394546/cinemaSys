<template>
  <el-card>
    <h3>修改昵称</h3>
    <el-input placeholder="请输入用户新昵称" v-model="newnickname" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="changeName()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      username: window.sessionStorage.getItem("username"),
      newnickname: "",
    };
  },

  methods: {
    async changeName() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:8086/api/system/changeNickname", {
          username: this.username,
          newnickname: this.newnickname,
        })
        .then((response) => {
          alert(response.data.msg);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/adminIndex" });
    },
  },
};
</script>

<style></style>
