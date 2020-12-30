<template>
  <el-card>
    <h3>添加放映厅</h3>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" @click="addRoom()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      mInfo: "",
      cinemaId: window.sessionStorage.getItem("cinemaId"),

      quillData: "",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },

  methods: {
    async addRoom() {
      let response = await this.$axios
        .post("http://106.14.220.105:5000/api/addRoom", {
          cinemaId: this.cinemaId,
          info: this.mInfo
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/RoomManage" });
    },
  },
};
</script>

<style></style>
