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
      path: '/mine',
      name: 'Mine',
      component: function (resove) {
        require(['./pages/Mine'], resove)
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
