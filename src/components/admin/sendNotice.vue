<template>
  <el-card>
    <h3>发送通知</h3>
    <quill-editor ref="myTextEditor" v-model="noticeInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-input
      placeholder="请输入用户用户名"
      v-model="user_username"
      clearable
    ></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="sendNotice()">确认发送</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      admin_username: window.sessionStorage.getItem("name"),
      user_username: "",
      noticeInfo: "",
    };
  },

  methods: {
    async sendNotice() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:20086/v1/messagecontroller/message", {
          admin_username: this.admin_username,
          user_username: this.user_username,
          message: this.noticeInfo,
        })
        .then((response) => {
          alert("发送成功！");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/noticeManage" });
    },
  },
};
</script>

<style></style>
