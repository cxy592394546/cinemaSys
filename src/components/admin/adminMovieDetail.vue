<template>
  <div>
    <el-card shadow="never">
      <img :src="movieInfo.logo" style="width: 25%;display: block;" />
      <div slot="header" class="clearfix">
        <span>{{ movieInfo.name }}</span><br/>
        <span>ID: {{ movieId }}</span>
      </div>
      <div clas="text">
        <span>上映时间：{{ movieInfo.time }}</span>
      </div>
      <div v-html="this.movieInfo.info">{{ this.movieInfo.info }}</div>
      <el-button type="danger" @click="deleteMovie()">删除影片</el-button>
      <el-button type="info" @click="addSession()">添加场次</el-button>
      <el-button type="info" @click="changeLogo">修改海报</el-button>
      <el-dialog
        title="上传图片"
        :visible.sync="dialogVisible"
        width="65%"
        center
      >
        <el-upload 
          :http-request="fileUploadRequest"
          name ="file"
          ref="upload"
          class="upload-demo"
          list-type="picture"
          :auto-upload="false"
          drag
          action="http://cinema.qingxu.website:20086/v1/movie-controller/file"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <el-button type="info" size="small" @click="closeDialog"
          >返回</el-button
        >
        <el-button
          class="button"
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="fileUpload"
          >上传到服务器</el-button
        >
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: window.sessionStorage.getItem("movieId"),

      movieInfo: "",
      dialogVisible: false,
      fileList: [],
      likeFlag: false,
    };
  },

  props: ["catchData"],

  mounted() {
    this.loadMovie();
  },

  methods: {
    async loadMovie() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/movie-controller/movie-detail?id=" +
          this.movieId
      );
      this.movieInfo = response.data.movieDetails;
    },

    async deleteMovie() {
      let response = await this.$axios
        .delete("http://cinema.qingxu.website:20086/v1/movie-controller/movie", {
          data: { movie_id: this.movieId },
        })
        .then((response) => {
          alert("删除成功！");
        })
        .catch((err) => {
          alert(err);
        });
      this.$router.push({ path: "/MovieManage" });
    },

    addSession() {
      window.sessionStorage.setItem("movieId", this.movieId);
      this.$router.push("/addSession");
    },

    changeLogo() {
      this.dialogVisible = true;
    },

    closeDialog() {
      this.dialogVisible = false;
    },

    async fileUploadRequest(param) {
      console.log("here");
      var self = this;
      var file = param.file;
      var isImage = file.type.indexOf("image") != -1;
      var isExceed = file.size > 500 * 1024;
      var index = 0;
      var isSuccess = true;
      console.log(index);
      console.log(param);
      console.log(self.$refs.upload.uploadFiles);
      if (!isImage) {
        this.$message.error(`文件 ${file.name} 并非图片文件，上传失败`);
        return;
      }
      if (isExceed) {
        this.$message.error(
          `文件 ${file.name} 大小为 ${file.size /
            1024}kb，大于500kb限制，文件上传失败`
        );
        return;
      }
      var formData = new FormData();
      formData.append(param.filename, file);
      self.$refs.upload.uploadFiles[index].percentage = 30;
      var response = await this.$axios
        .post(param.action, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-id": this.movieId,
          },
        })
        .catch(function(error) {
          isSuccess = false;
          self.$message.error(
            `出现网络问题 ${error.code}，文件 ${file.name} 上传失败，请重试`
          );
          self.$refs.upload.uploadFiles[index].percentage = 0;
          return;
        });
      console.log(response);
      if (isSuccess) {
        this.imgUrl = response.data.url;
        self.$refs.upload.uploadFiles[index].percentage = 100;
        return;
      }
      return;
    },
    fileUpload() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
