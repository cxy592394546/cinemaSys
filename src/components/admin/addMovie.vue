<template>
  <el-card>
    <p><b>添加影片</b></p>
    <el-upload
      action="http://cinema.qingxu.website:8083/oss/uploadFile?storagePath=/demo"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :limit="1"
      :on-exceed="handleExceed"
    >
      <!-- :auto-upload="false" -->
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
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

      dialogImageUrl: "",
      dialogVisible: false,
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
        .post("http://cinema.qingxu.website:8083/demo/addNewMovie", {
          id: 1000,
          info: this.mInfo,
          // logo: this.dialogImageUrl,
          name: this.mName,
          time: this.mTime,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/movieManage" });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleExceed(files, fileList) {
      this.$message.warning("限制上传图片个数为1!");
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style></style>
