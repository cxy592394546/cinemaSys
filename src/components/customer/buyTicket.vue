<template>
  <el-card>
    <el-form ref="form" :model="form" :rules="formRules" label-width="100px">
      <el-form-item label="影片名称">
        <el-input :placeholder="movieName" disabled></el-input>
      </el-form-item>
      <el-form-item label="选择场次" prop="time">
        <el-select
          placeholder="选择场次"
          v-model="form.time"
          value-key="id"
          style="width: 100%;"
        >
          <el-option
            v-for="time in playTimes"
            :key="time.id"
            :label="time.time"
            :value="time"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="info" @click="commitOrder()">提交订单</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      movieId: window.sessionStorage.getItem("movieId"),
      movieName: window.sessionStorage.getItem("movieName"),

      form: {
        date: "",
        time: "",
      },

      playTimes: [
        {
          id: "场次1",
          time: "time1",
        },
        {
          id: "场次2",
          time: "time2",
        },
      ],

      formRules: {
        date: [{ required: true, message: "请选择具体日期", trigger: "blur" }],
        time: [{ required: true, message: "请选择具体场次", trigger: "blur" }],
      },
    };
  },
  methods: {
    async commitOrder() {
      let response = await this.$axios.post(
        "http://channel.qingxu.website:8087/demo/addTicket",
        {
          buyerId: 0,
          movieId: 0,
          price: 0,
          seat: 0,
          ticketId: 0,
        }
      );
    },
  },
};
</script>

<style></style>
