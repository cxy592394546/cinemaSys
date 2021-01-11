<template>
  <el-card>
    <div slot="header" class="clearfix">
      <h3>影院信息</h3>
      <el-button type="info" style="float:right" @click.native="addCinema()">
        添加影院
      </el-button>
    </div>
    <el-table :data="cinemaTable" border style="width:  100%">
      <el-table-column
        prop="cinemaId"
        label="影院id"
        width="250"
      ></el-table-column>
      <el-table-column prop="info" label="影院信息" width="500">
        <template slot-scope="scope">
          <span>{{ scope.row.info | ellipsis }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteCinema(scope.row)"
            >删除影院</el-button
          >
          <el-button type="text" size="small" @click="viewCinema(scope.row)"
            >影院信息</el-button
          >
          <el-button type="text" size="small" @click="editCinema(scope.row)"
            >更新信息</el-button
          >
          <el-button type="text" size="small" @click="roomMess(scope.row)"
            >放映厅情况</el-button
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
    this.getCinema();
  },

  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 30) {
        return value.slice(0, 30) + "...";
      }
      return value;
    },
  },

  methods: {
    async getCinema() {
      let response = await this.$axios.get(
        "http://cinema.qingxu.website:20086/v1/cinema"
      );
      this.cinemaTable = response.data.result;
    },

    addCinema() {
      this.$router.push("/addCinema");
    },

    async deleteCinema(row) {
      let response = await this.$axios
        .delete("http://cinema.qingxu.website:20086/v1/cinema", {
          data: { cinemaId: row.cinemaId },
        })
        .then((response) => {
          this.$router.push("/adminIndex");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },

    async editCinema(row) {
      window.sessionStorage.setItem("cinemaId", row.cinemaId);
      this.$router.push("/editCinema");
    },

    viewCinema(row) {
      let cinemaId = "影院ID：" + row.cinemaId;
      let cinemaInfo = "影院信息:" + row.info;
      let htmlText = cinemaId + "<br/>" + cinemaInfo;
      this.$alert(htmlText, "影院信息", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
      });
    },

    roomMess(row) {
      window.sessionStorage.setItem("cinemaId", row.cinemaId);
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
