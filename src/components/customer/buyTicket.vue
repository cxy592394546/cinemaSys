<template>
  <el-card>
    <el-form ref="form" :model="form" :rules="formRules" label-width="100px">
      <el-form-item label="电影场次">
        <el-input :placeholder="sessionId"></el-input>
      </el-form-item>
      <el-form-item label="座位号">
        <el-input placeholder="请输入座位号" v-model="seatId"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="info" @click="commitOrder()">提交订单</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      userId: window.sessionStorage.getItem("id"),
      sessionId: window.sessionStorage.getItem("sessionId"),

      seatId: "",
    };
  },
  methods: {
    async commitOrder() {
      let response = await this.$axios.post(
        "http://cinema.qingxu.website:20086/v1/ticketservice/newticket",
        {
          buyerId: this.userId,
          sessionId: this.sessionId,
          price: 50,
          seat: this.seatId,
          ticketId: 100,
        })
        .then((response) => {
          alert("添加成功");
          this.$router.push("/movieMess")
        }
      );
    },
  },
};
</script>

<style></style>
