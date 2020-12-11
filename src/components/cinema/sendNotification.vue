<template>
  <el-card>
    <el-input placeholder="请输入用户id" v-model="customerId" clearable />
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="mInfo" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" round @click="sendMess">发送通知</el-button>
  </el-card>
</template>

<script>
export default {
  data: {
    MessToSend: "",
    customerId: "",
  },
};
</script>

<style></style>
