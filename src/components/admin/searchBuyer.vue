<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>影票列表</h3>
    </div>
    <el-table :data="ticketTable" border style="width:  100%">
      <el-table-column
        prop="ticketId"
        label="影票ID"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="buyerId"
        label="顾客ID"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="sessionId"
        label="场次ID"
        width="150"
      ></el-table-column>
      <el-table-column prop="price" label="单价" width="150"></el-table-column>
      <el-table-column prop="seat" label="座位号" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteTicket(scope.row)">
            退票
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      ticketTable: [],

      buyerId: window.sessionStorage.getItem("buyerId"),
    };
  },

  mounted() {
    this.ticketList();
  },

  methods: {
    async ticketList() {
      console.log(this.buyerId);
      let response = await this.$axios.post(
        "http://channel.qingxu.website:8087/demo/findByBuyerId",
        { buyerId: this.buyerId }
      );
      this.ticketTable = response.data;
    },

    async deleteTicket(row) {
      let response = await this.$axios
        .post("http://channel.qingxu.website:8087/demo/deleteTicket", {
          ticketId: row.ticketId,
        })
        .then((response) => {
          alert("退票成功！");
          this.$router.push("/allTicket");
        })
        .error((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style></style>
