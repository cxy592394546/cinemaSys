import Vue from "vue";
import VueRouter from "vue-router";

//顾客相关组件
import Home from "../views/Home.vue";
import buyTicket from "../components/customer/buyTicket.vue";
import cinemaMess from "../components/customer/cinemaMess.vue";
import customerIndex from "../components/customer/customerIndex.vue";
import favourites from "../components/customer/favourites.vue";
import movieDetail from "../components/customer/movieDetail.vue";
import movieMess from "../components/customer/movieMess.vue";
import presentReview from "../components/customer/presentReview.vue";
import searchList from "../components/customer/searchList.vue";

//注册、登陆相关组件
import Welcome from "../views/Welcome.vue";
import userLogin from "../components/login/userLogin.vue";
import register from "../components/login/register.vue";
import welcomeIndex from "../components/login/welcomeIndex.vue";

//个人信息界面
import PersonalPage from "../views/PersonalPage.vue";
import changeName from "../components/personalPage/changeName.vue";
import changePassword from "../components/personalPage/changePassword.vue";
import noticeList from "../components/personalPage/noticeList.vue";
import personalIndex from "../components/personalPage/personalIndex.vue";
import personalMess from "../components/personalPage/personalMess.vue";
import ticketMess from "../components/personalPage/ticketMess.vue";

//管理员界面
import AdminPage from "../views/AdminPage.vue";
import addAdmin from "../components/admin/addAdmin.vue";
import addCinema from "../components/admin/addCinema.vue"
import addMovie from "../components/admin/addMovie.vue";
import addRoom from "../components/admin/addRoom.vue";
import addSession from "../components/admin/addSession.vue";
import addUser from "../components/admin/addUser.vue";
import adminChangeName from "../components/admin/adminChangeName.vue";
import adminChangePassword from "../components/admin/adminChangePassword.vue";
import adminChangeUserName from "../components/admin/adminChangeUserName.vue";
import adminChangeUserPassword from "../components/admin/adminChangeUserPassword.vue";
import adminIndex from "../components/admin/adminIndex.vue";
import adminManage from "../components/admin/adminManage.vue";
import adminMovieDetail from "../components/admin/adminMovieDetail.vue";
import allTicket from "../components/admin/allTicket.vue"
import changeCinemaMess from "../components/admin/changeCinemaMess.vue";
import cinemaManage from "../components/admin/cinemaManage.vue";
import editCinema from "../components/admin/editCinema.vue"
import editRoom from "../components/admin/editRoom.vue"
import editSession from "../components/admin/editSession.vue"
import movieManage from "../components/admin/movieManage.vue";
import noticeManage from "../components/admin/noticeManage.vue";
import roomManage from "../components/admin/roomManage.vue";
import searchBuyer from "../components/admin/searchBuyer.vue";
import searchMovie from "../components/admin/searchMovie.vue";
import searchTicket from "../components/admin/searchTicket.vue";
import searchUser from "../components/admin/searchUser.vue";
import sendNotice from "../components/admin/sendNotice.vue";
import sessionList from "../components/admin/sessionList.vue";
import userManage from "../components/admin/userManage.vue";

import sellTicket from "../components/admin/sellTicket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Welcome",
  },
  {
    path: "/Welcome",
    component: Welcome,
    redirect: "/welcomeIndex",
    children: [
      { path: "/userLogin", component: userLogin },
      { path: "/register", component: register },
      { path: "/welcomeIndex", component: welcomeIndex },
    ],
  },
  {
    path: "/Home",
    component: Home,
    redirect: "/customerIndex",
    children: [
      { path: "/buyTicket", component: buyTicket },
      { path: "/cinemaMess", component: cinemaMess },
      { path: "/customerIndex", component: customerIndex },
      { path: "/favourites", component: favourites },
      { path: "/movieDetail", component: movieDetail },
      { path: "/movieMess", component: movieMess },
      { path: "/presentReview", component: presentReview },
      { path: "/searchList", component: searchList },
    ],
  },
  {
    path: "/PersonalPage",
    component: PersonalPage,
    redirect: "/personalIndex",
    children: [
      { path: "/changeName", component: changeName },
      { path: "/changePassword", component: changePassword },
      { path: "/noticeList", component: noticeList },
      { path: "/personalIndex", component: personalIndex },
      { path: "/personalMess", component: personalMess },
      { path: "/ticketMess", component: ticketMess },
    ],
  },
  {
    path: "/AdminPage",
    component: AdminPage,
    redirect: "/adminIndex",
    children: [
      { path: "/addAdmin", component: addAdmin },
      { path: "/addCinema", component: addCinema },
      { path: "/addMovie", component: addMovie },
      { path: "/addRoom", component: addRoom },
      { path: "/addSession", component: addSession },
      { path: "/addUser", component: addUser },
      { path: "/adminChangeName", component: adminChangeName },
      { path: "/adminChangePassword", component: adminChangePassword },
      { path: "/adminChangeUserName", component: adminChangeUserName },
      { path: "/adminChangeUserPassword", component: adminChangeUserPassword },
      { path: "/adminIndex", component: adminIndex },
      { path: "/adminManage", component: adminManage },
      { path: "/adminMovieDetail", component: adminMovieDetail },
      { path: "/allTicket", component: allTicket },
      { path: "/changeCinemaMess", component: changeCinemaMess },
      { path: "/cinemaManage", component: cinemaManage },
      { path: "/editCinema", component: editCinema },
      { path: "/editRoom", component:editRoom },
      { path: "/editSession", component:editSession },
      { path: "/movieManage", component: movieManage },
      { path: "/noticeManage", component: noticeManage },
      { path: "/roomManage", component:roomManage},
      { path: "/searchBuyer", component: searchBuyer },
      { path: "/searchMovie", component: searchMovie },
      { path: "/searchTicket", component: searchTicket },
      { path: "/searchUser", component: searchUser },
      { path: "/sendNotice", component: sendNotice },
      { path: "/sessionList", component: sessionList },
      { path: "/userManage", component: userManage },


      { path: "/sellTicket", component: sellTicket },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
