<template>
  <div>
    <el-card class="box-card">
      <div class="block">
        <el-avatar shape="circle" :src="logo" :size="100"> </el-avatar>
      </div>
      <div style="margin: 20px 0;"></div>
      <el-button type="info" @click="changeLogo">修改头像</el-button>
      <div style="margin: 20px 0;"></div>
      <div clas="text">用户名：{{ username }}</div>
      <div style="margin: 20px 0;"></div>
      <div class="text">昵 称：{{ nickname }}</div>
      <div style="margin: 20px 0;"></div>
      <el-button type="info" @click="changeName">修改昵称</el-button>
      <el-button type="info" @click="changePassword">修改密码</el-button>
    </el-card>
    <el-dialog
      title="上传头像"
      :visible.sync="dialogVisible"
      width="65%"
      center
    >
      <el-upload
        :http-request="fileUploadRequest"
        name="fileName"
        ref="upload"
        class="upload-demo"
        list-type="picture"
        :auto-upload="false"
        drag
        action="http://cinema.qingxu.website:20086/v1/usercontroller/logo"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <el-button type="info" size="small" @click="closeDialog">返回</el-button>
      <el-button
        class="button"
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="fileUpload"
        >上传到服务器</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      fileList: [],
      username: window.sessionStorage.getItem("name"),
      nickname: window.sessionStorage.getItem("nickname"),
      logo: window.sessionStorage.getItem("url"),
    };
  },

  mounted() {},
  methods: {
    changeName() {
      this.$router.push("/changeName");
    },

    changePassword() {
      this.$router.push("/changePassword");
    },
    handleCommand(command) {
      this.showDot = true;
    },

    changeLogo() {
      //this.$router.push("/changeLogo");
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
        .put(param.action, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
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
  font-size: 24px;
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

.box-card {
  width: 480px;
}
</style>
