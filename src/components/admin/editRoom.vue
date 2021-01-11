<template>
  <el-card>
    <h3>编辑放映厅</h3>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" @click="editRoom()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      mInfo: "",
      cinemaId: window.sessionStorage.getItem("cinemaId"),
      roomId: window.sessionStorage.getItem("roomId"),

      quillData: "",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },

  methods: {
    async editRoom() {
      let response = await this.$axios
        .put("http://cinema.qingxu.website:5000/v1/room", {
          cinemaId: Number(this.cinemaId),
          roomId: Number(this.roomId),
          info: this.mInfo,
        })
        .then((response) => {
          alert("修改成功！");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/roomManage" });
    },
  },
};
</script>

<style></style>
