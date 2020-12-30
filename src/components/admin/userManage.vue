<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>用户列表</h3>
      <el-button type="info" style="float:right" @click.native="addUser()">
        新建用户
      </el-button>
      <el-button type="info" style="float:left" @click.native="searchUser()">
        查找用户
      </el-button>
    </div>
    <el-table :data="userTable" border style="width:  100%">
      <el-table-column prop="id" label="用户id" width="150"></el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        width="400"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="用户类型"
        width="150"
      ></el-table-column>
      <el-table-column prop="create_time" label="注册时间" width="450">
        <template slot-scope="scope">{{
          scope.row.create_time | formatDate
        }}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteUser(scope.row)"
            >删除用户</el-button
          >
          <el-button type="text" size="small" @click="changeUsername(scope.row)"
            >修改昵称</el-button
          >
          <el-button type="text" size="small" @click="changePassword(scope.row)"
            >修改密码</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import adminChangeUserNameVue from "./adminChangeUserName.vue";
export default {
  data() {
    return {
      userTable: [],
    };
  },

  mounted() {
    this.getUsers();
  },

  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    },
  },

  methods: {
    async getUsers() {
      let response = await this.$axios.post(
        "http://cinema.qingxu.website:8086/api/system/allUser"
      );
      this.userTable = response.data.result;
    },
    addUser() {
      this.$router.push("/addUser");
    },
    searchUser() {
      this.$router.push("/searchUser");
    },
    async deleteUser(row) {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:8086/api/system/deleteUser", {
          username: row.username,
        })
        .then((response) => {
          alert(response.data.msg);
          this.$router.push("/userManage");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
    async changeUsername(row) {
      window.sessionStorage.setItem("username", row.username),
        this.$router.push("/adminChangeUserName");
    },
    async changePassword(row) {
      window.sessionStorage.setItem("username", row.username),
        console.log(row.password);
      window.sessionStorage.setItem("password", row.password),
        this.$router.push("/adminChangeUserPassword");
    },
  },
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
