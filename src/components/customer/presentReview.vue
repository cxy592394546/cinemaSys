<template>
  <el-card>
    <p><b>发表评论</b></p>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <div style="margin: 20px 0;"></div>
    <quill-editor ref="myTextEditor" v-model="review" style="height:300px;">
    </quill-editor>
    <div style="margin: 100px 0;"></div>
    <el-button type="success" @click="commitReview()">确认提交</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      review:"",
    };
  },

  mounted() {
    this.$nextTick(() => {
      setInterval(this.CurentTime, 1000);
    });
  },

  methods: {
    async commitReview() {
      let response = await this.$axios
        .post(url,{})
        .then((response)=> {
          alert(response.data);
        })
        .catch((err)=>{
          console.log(err);
          alert(err);
        });
        this.$router.push({ path: "/movieMess"});
    },
  },
};
</script>

<style></style>
