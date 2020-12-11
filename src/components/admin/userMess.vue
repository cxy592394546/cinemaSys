<template>
  <el-card class="box-card">
    <div class="block">
      <el-avatar
        shape="square"
        icon="el-icon-user-solid"
        :size="150"
      ></el-avatar>
    </div>
    <div clas="text">用户名：{{ username }}</div>
    <div clas="text">用户类型：{{ usertype }}</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      username: window.sessionStorage.getItem("name"),
      usertype: window.sessionStorage.getItem("type"),
    };
  },

  mounted() {},
  methods: {},
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
