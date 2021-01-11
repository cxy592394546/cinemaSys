<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>通知列表</h3>
    </div>
    <el-table :data="messageTable" border style="width:  100%">
      <el-table-column
        prop="messageid"
        label="通知id"
        width="250"
      ></el-table-column>
      <el-table-column
        prop="adminname"
        label="管理员帐号"
        width="250"
      ></el-table-column>
      <el-table-column prop="sendtime" label="发送时间" width="400">
        <template slot-scope="scope">{{
          scope.row.sendtime | formatDate
        }}</template>
      </el-table-column>
      <!-- <el-table-column
        prop="message"
        label="消息内容"
        width="500"
      ></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="viewMessage(scope.row)"
            >详细信息</el-button
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
      messageTable: [],

      username: window.sessionStorage.getItem("name"),
    };
  },

  mounted() {
    this.getMessages();
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
    async getMessages() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/messagecontroller/receive-message?username=" +
          this.username
      );
      this.messageTable = response.data.result;
    },

    viewMessage(row) {
      this.$alert(row.message, "通知", {
        confirmButtonText: "确定",
      });
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
