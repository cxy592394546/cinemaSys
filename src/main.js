import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
axios.defaults.withCredentials = false;
axios.defaults.crossDomain = true;
Vue.prototype.$axios = axios;

//导入ElementUI相关内容
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入全局样式表
import "./assets/css/global.css";

// 富文本编辑器
import quillEditor from "vue-quill-editor";
Vue.use(quillEditor);
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

// md5
import md5 from 'js-md5'
Vue.prototype.$md5 = md5
// this.md5OUT= this.$md5(md5In);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 发送请求前
    // 判断是否存在token，如果存在将每个页面header都添加token
    
    if (store.state.token) {
      config.headers.common["token"] = store.state.token;
    }

    return config;
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit("del_token");
          router.replace({
            path: "/welcomeIndex",
            query: { redirect: router.currentRoute.fullPath },
          });
      }
    }
    return error;
  }
);
