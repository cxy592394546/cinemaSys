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
        width="300"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="用户类型"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="create_time"
        label="注册时间"
        width="450"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteUser(scope.row)"
            >删除用户</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      userTable: [],
    };
  },
  mounted() {
    this.getUsers();
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
      this.$router.push("/searchUser")
    },
    async deleteUser(row) {
      let response = await this.$axios
        .post("http://cinema.qingxu.website:8086/api/system/deleteUser", {
          username: row.username,
        })
        .then((response) => {
          alert(response.data.result);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
      this.$router.push({ path: "/userManage" });
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
