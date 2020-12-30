<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>场次列表</h3>
    </div>
    <el-table :data="cinemaTable" border style="width:  100%">
      <el-table-column
        prop="sessionId"
        label="场次id"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="movieId"
        label="影片Id"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="roomId"
        label="放映厅Id"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="time"
        label="放映时间"
        width="400"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteSession(scope.row)"
            >删除场次</el-button
          >
          <el-button type="text" size="small" @click="editSession(scope.row)"
            >修改时间</el-button
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
      cinemaTable: [],

      adminName: window.sessionStorage.getItem("name"),
    };
  },

  mounted() {
    this.getSession();
  },

  methods: {
    async getSession() {
      let response = await this.$axios.get(
        "http://106.14.220.105:5000/api/getSessionInfo"
      );
      this.cinemaTable = response.data.result;
    },

    async deleteSession(row) {
      let response = await this.$axios
        .delete("http://106.14.220.105:5000/api/deleteSession", {
          data: { sessionId: row.sessionId },
        })
        .then((response) => {
          alert(response.data);
          this.$router.push("/adminIndex");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },

    async editSession(row) {
      window.sessionStorage.setItem("sessionId", row.sessionId);
      window.sessionStorage.setItem("roomId", row.roomId);
      window.sessionStorage.setItem("movieId", row.movieId);
      this.$router.push("/editSession");
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
