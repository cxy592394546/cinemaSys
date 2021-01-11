<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>放映厅列表</h3>
      <el-button type="info" style="float:right" @click.native="addRoom()">
        添加放映厅
      </el-button>
    </div>
    <el-table :data="roomTable" border style="width:  100%">
      <el-table-column
        prop="roomId"
        label="放映厅id"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="cinemaId"
        label="影院id"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="info"
        label="放映厅信息"
        width="500"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteRoom(scope.row)"
            >删除放映厅</el-button
          >
          <el-button type="text" size="small" @click="viewRoom(scope.row)"
            >放映厅信息</el-button
          >
          <el-button type="text" size="small" @click="editRoom(scope.row)"
            >更新信息</el-button
          >
          <!-- <el-button type="text" size="small" @click="seatMess(scope.row)"
            >座位情况</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      roomTable: [],

      cinemaId: window.sessionStorage.getItem("cinemaId"),
    };
  },

  mounted() {
    this.getRoom();
  },

  methods: {
    async getRoom() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/room?cinemaId=" + this.cinemaId
      );
      this.roomTable = response.data.result;
    },

    addRoom() {
      this.$router.push("/addRoom");
    },

    async deleteRoom(row) {
      let response = await this.$axios
        .delete("http://cinema.qingxu.website:20086/v1/room", {
          data: { roomId: Number(row.roomId), cinemaId: Number(row.cinemaId) },
        })
        .then((response) => {
          this.$router.push("/cinemaManage");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },

    async editRoom(row) {
      window.sessionStorage.setItem("roomId", row.roomId);
      window.sessionStorage.setItem("cinemaId", row.cinemaId);
      this.$router.push("/editRoom");
    },

    viewRoom(row) {
      let roomId = "放映厅ID：" + row.roomId;
      let cinemaId = "影院ID：" + row.cinemaId;
      let roomInfo = "放映厅信息:" + row.info;
      let htmlText = roomId + "<br/>" + cinemaId + "<br/>" + roomInfo;
      this.$alert(htmlText, "放映厅信息", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
      });
    },

    seatMess(row) {
      window.sessionStorage.setItem("roomId", row.roomId);
      this.$router.push("/roomManage");
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
