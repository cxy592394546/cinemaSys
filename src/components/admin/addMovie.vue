<template>
  <el-card>
    <p><b>添加影片</b></p>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-input placeholder="请输入影片名称" v-model="mName" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input placeholder="请输入上映时间" v-model="mTime" clearable></el-input>
    <div style="margin: 20px 0;"></div>
    <el-button type="success" @click="addMovie()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      mInfo: "",
      mName: "",
      mTime: "",
      quillData: "",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },

  methods: {
    async addMovie() {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:20086/v1/movie-controller/movie", {
          Info: this.mInfo,
          name: this.mName,
          time: this.mTime,
        })
        .then((response) => {
          this.$router.push({ path: "/movieManage" });
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
