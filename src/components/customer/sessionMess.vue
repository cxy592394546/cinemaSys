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
          <el-button type="text" size="small" @click="buyTicket(scope.row)"
            >购票</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import buyTicketVue from './buyTicket.vue';
export default {
  data() {
    return {
      cinemaTable: [],
    };
  },

  mounted() {
    this.getSession();
  },

  methods: {
    async getSession() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/session"
      );
      this.cinemaTable = response.data.result;
    },

    buyTicket(row){
        window.sessionStorage.setItem("sessionId", row.sessionId)
        this.$router.push("/buyTicket")
    }
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
