<template>
  <el-card>
    <h3>添加影院</h3>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" @click="addCinema()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      mInfo: "",

      quillData: "",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },

  methods: {
    async addCinema() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:20086/v1/cinema", {
          info: this.mInfo,
        })
        .then((response) => {
          this.$router.push({ path: "/cinemaManage" });
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
