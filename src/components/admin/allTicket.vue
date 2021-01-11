<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>已售票列表</h3>
      <el-input placeholder="请输入内容" v-model="input0" clearable>
        <el-button slot="append" icon="el-icon-search" @click="findByBuyerId()"
          >查询用户购票记录
        </el-button>
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input placeholder="请输入内容" v-model="input1" clearable>
        <el-button slot="append" icon="el-icon-search" @click="findByTicketId()"
          >查询指定影票信息
        </el-button>
      </el-input>
    </div>
    <el-table :data="ticketTable" border style="width:  100%">
      <el-table-column
        prop="ticketId"
        label="影票ID"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="sessionId"
        label="场次ID"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="buyerId"
        label="顾客ID"
        width="150"
      ></el-table-column>
      <el-table-column prop="price" label="票价" width="150"></el-table-column>
      <el-table-column prop="seat" label="座位号" width="150"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      ticketTable: [],

      input0: "",
      input1: "",
    };
  },

  mounted() {
    this.getTickets();
  },

  //   filters: {
  //     formatDate: function(value) {
  //       let date = new Date(value);
  //       let y = date.getFullYear();
  //       let MM = date.getMonth() + 1;
  //       MM = MM < 10 ? "0" + MM : MM;
  //       let d = date.getDate();
  //       d = d < 10 ? "0" + d : d;
  //       let h = date.getHours();
  //       h = h < 10 ? "0" + h : h;
  //       let m = date.getMinutes();
  //       m = m < 10 ? "0" + m : m;
  //       let s = date.getSeconds();
  //       s = s < 10 ? "0" + s : s;
  //       return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
  //     },
  //   },

  methods: {
    async getTickets() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/ticketservice/allticket"
      )
      this.ticketTable = response.data;
    },

    findByBuyerId() {
      if (this.input0) {
        window.sessionStorage.setItem("buyerId", this.input0);
        console.log(this.input0);
        this.$router.push("/searchBuyer");
      } else alert("输入不能为空");
    },

    findByTicketId() {
      if (this.input1) {
        window.sessionStorage.setItem("ticketId", this.input1);
        console.log(this.input1);
        this.$router.push("/searchTicket");
      } else alert("输入不能为空");
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
