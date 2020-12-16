<template>
  <body id="poster">
    <el-container>
      <el-form
        ref="registerFormRef"
        :model="registerForm"
        :rules="registerFormRules"
        class="register-container"
        label-position="left"
        label-width="0px"
      >
        <h3 class="register_title">注册</h3>
        <el-form-item prop="nickname">
          <el-input
            type="text"
            v-model="registerForm.nickname"
            auto-complete="off"
            placeholder="昵称"
          ></el-input>
        </el-form-item>

        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="registerForm.username"
            auto-complete="off"
            placeholder="账号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%;background: #505458;border: none"
            v-on:click="register"
            >注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </body>
</template>

<script>
export default {
  data() {
    return {
      //登录表单数据绑定
      registerForm: {
        nickname: "",
        username: "",
        password: "",
        imgUrl: "",
      },
      show: true,
      //表单的验证规则
      registerFormRules: {
        //    验证昵称是否合法
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "用户名必须在1-20个字符之间",
            trigger: "blur",
          },
        ],
        //    验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "用户名必须在3-20个字符之间",
            trigger: "blur",
          },
        ],
        //    验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 50,
            message: "密码必须在6-50个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  //回车登录操作
  created() {
    let _this = this;

    document.onkeydown = function(e) {
      let key = window.event.keyCode;

      if (key === 13) {
        _this.register();
      }
    };
  },
  methods: {
    register() {
      this.$refs.registerFormRef.validate(async (valid) => {
        let response = await this.$axios
          .post("http://cinema.qingxu.website:8086/api/system/register", {
            nickname: this.registerForm.nickname,
            username: this.registerForm.username,
            password: this.registerForm.password,
          })
          .then((response) => {
            alert(response.data.msg);
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
        this.$router.push({ path: "/welcomeIndex" });
      });
    },
  },
};
</script>
<style scoped>
#poster {
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  color: rgba(255, 255, 255, 0.65);
  background-color: #24292e;
  /* background-image: url(../../assets/img/star-bg.svg),
        linear-gradient(#191c20, #24292e 15%); */
  background-repeat: repeat-x;
  background-position: center 0, 0 0, 0 0;
}

.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 150px auto;
  width: 300px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
}

.register_title {
  letter-spacing: 10px;
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
