import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resove) {
        require(['./pages/Home'], resove)
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: function (resove) {
        require(['./pages/Home'], resove)
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: function (resove) {
        require(['./pages/ShopCart'], resove)
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: function (resove) {
        require(['./pages/Mine'], resove)
      }
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: function (resove) {
        require(['./pages/Feedback'], resove)
      }
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: function (resove) {
        require(['./pages/AboutMe'], resove)
      }
    },
    {
      path: '/wallet',
      name: 'MyWallet',
      component: function (resove) {
        require(['./pages/MyWallet'], resove)
      }
    },
    {
      path: '/setting',
      name: 'Setting',
      component: function (resove) {
        require(['./pages/Setting'], resove)
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: function (resove) {
        require(['./pages/Login'], resove)
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: function (resove) {
        require(['./pages/Register'], resove)
      }
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: function (resove) {
        require(['./pages/ForgotPassword'], resove)
      }
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: function (resove) {
        require(['./pages/Details'], resove)
      }
    },
    {
      path: '/order/:type',
      name: 'Order',
      component: function (resove) {
        require(['./pages/Order'], resove)
      }
    }
  ]
})
