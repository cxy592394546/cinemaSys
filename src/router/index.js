import Vue from 'vue'
import VueRouter from 'vue-router'

//顾客相关组件
import Home from '../views/Home.vue'
import buyTicket from '../components/customer/buyTicket.vue'
import cinemaMess from '../components/customer/cinemaMess.vue'
import customerIndex from '../components/customer/customerIndex.vue'
import favourites from '../components/customer/favourites.vue'
import movieDetail from '../components/customer/movieDetail.vue'
import movieMess from '../components/customer/movieMess.vue'
import presentReview from '../components/customer/presentReview.vue'
import searchList from '../components/customer/searchList.vue'

//注册、登陆相关组件
import Welcome from '../views/Welcome.vue'
import adminLogin from '../components/login/adminLogin.vue'
import userLogin from '../components/login/userLogin.vue'
import register from '../components/login/register.vue'
import welcomeIndex from '../components/login/welcomeIndex.vue'

//个人信息界面
import PersonalPage from '../views/PersonalPage.vue'
import changeMess from '../components/personalPage/changeMess.vue'
import noticeList from '../components/personalPage/noticeList.vue'
import personalIndex from '../components/personalPage/personalIndex.vue'
import personalMess from '../components/personalPage/personalMess.vue'
import ticketMess from '../components/personalPage/ticketMess.vue'

//管理员界面
import AdminPage from '../views/AdminPage.vue'
import addAdmin from '../components/admin/addAdmin.vue'
import addUser from '../components/admin/addUser.vue'
import addMovie from '../components/admin/addMovie.vue'
import adminIndex from '../components/admin/adminIndex.vue'
import adminManage from '../components/admin/adminManage.vue'
import adminMovieDetail from '../components/admin/adminMovieDetail.vue'
import movieManage from '../components/admin/movieManage.vue'
import searchMovie from '../components/admin/searchMovie.vue'
import searchUser from '../components/admin/searchUser.vue'
import userManage from '../components/admin/userManage.vue'

//影院方界面
import CinemaPage from '../views/CinemaPage.vue'
import changeCinemaMess from '../components/cinema/changeCinemaMess.vue'
import cinemaIndex from '../components/cinema/cinemaIndex.vue'
import roomAdjustment from '../components/cinema/roomAdjustment.vue';
import sellTicket from '../components/cinema/sellTicket.vue'
import sendNotification from '../components/cinema/sendNotification.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/Welcome'
  },
  {
    path:'/Welcome',
    component:Welcome,
    redirect:'/welcomeIndex',
    children:[      
      {path:'/adminLogin',component:adminLogin},
      {path:'/userLogin',component:userLogin},
      {path:'/register',component:register},
      {path:'/welcomeIndex',component:welcomeIndex},
    ]
  },
  {
    path: '/Home',
    component: Home,
    redirect:'/customerIndex',
    children:[      
      {path:'/buyTicket',component:buyTicket},
      {path:'/cinemaMess',component:cinemaMess},
      {path:'/customerIndex',component:customerIndex}, 
      {path:'/favourites',component:favourites},
      {path:'/movieDetail',component:movieDetail},
      {path:'/movieMess',component:movieMess,},
      {path:'/presentReview',component:presentReview},
      {path:'/searchList',component:searchList},
    ]
  },
  {
    path: '/PersonalPage',
    component: PersonalPage,
    redirect:'/personalIndex',
    children:[
      {path:'/changeMess',component:changeMess},
      {path:'/noticeList',component:noticeList},
      {path:'/personalIndex',component:personalIndex},
      {path:'/personalMess',component:personalMess},
      {path:'/ticketMess',component:ticketMess},
    ]
  },
  {
    path: '/AdminPage',
    component: AdminPage,
    redirect:'/adminIndex',
    children:[
      {path:'/addAdmin',component:addAdmin},
      {path:'/addUser',component:addUser},
      {path:'/addMovie',component:addMovie},
      {path:'/adminIndex',component:adminIndex},
      {path:'/adminManage',component:adminManage},
      {path:'/adminMovieDetail',component:adminMovieDetail},
      {path:'/movieManage',component:movieManage},
      {path:'/searchMovie',component:searchMovie},
      {path:'/searchUser',component:searchUser},
      {path:'/userManage',component:userManage},
    ]
  },
  {
    path: '/CinemaPage',
    component: CinemaPage,
    redirect:'/cinemaIndex',
    children:[
      {path:'/changeCinemaMess',component:changeCinemaMess},
      {path:'/cinemaIndex',component:cinemaIndex},
      {path:'/roomAdjustment',component:roomAdjustment},
      {path:'/sellTicket',component:sellTicket},
      {path:'/sendNotification',component:sendNotification},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
