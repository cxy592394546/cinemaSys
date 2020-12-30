<template>
  <el-card>
    <h3>添加影院</h3>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" @click="editCinema()">确认提交</el-button>
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
    async editCinema() {
      let response = await this.$axios
        .put("http://106.14.220.105:5000/api/editCinemaInfo", {
          cinemaId: Number(this.cinemaId),
          info: this.mInfo,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/cinemaManage" });
    },
  },
};
</script>

<style></style>
