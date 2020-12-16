<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>影票列表</h3>
    </div>
    <el-table :data="ticketTable" border style="width:  100%">
      <el-table-column prop="id" label="影票id" width="150"></el-table-column>
      <el-table-column
        prop="movieid"
        label="影片名称"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="seat"
        label="座位号"
        width="450"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteUser(scope.row)">
            退票
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  date() {
    return {
      ticketTable: [],
    };
  },

  mounted() {
    this.ticketList();
  },

  methods: {
    async ticketList() {
      let response = await this.$axios.get(
        "http://channel.qingxu.website:8087/demo/findByBuyerId?buyer_id=123"
      );
      this.ticketTable = response.data;
    },
  },
};
</script>

<style></style>
