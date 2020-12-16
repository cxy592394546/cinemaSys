<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>查找用户</h3>
      <el-input placeholder="请输入内容" v-model="input" clearable>
        <el-button slot="append" icon="el-icon-search" @click="searchUser()"
          >搜索
        </el-button>
      </el-input>
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
      input: "",
    };
  },
  methods: {
    async searchUser() {
      this.userTable = [];
      let response = await this.$axios.post(
        "http://cinema.qingxu.website:8086/api/system/findUser",
        { username: this.input }
      );
      // this.userTable = response.data.result;
      this.userTable.push(response.data.result)
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
