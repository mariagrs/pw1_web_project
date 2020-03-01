import Vue from 'vue'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: dashboard
//     },
//     {
//       path: '/',
//       name: 'login',
//       component: login
//     }
//   ]
// })
function createRouter (state) {
  async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('http://192.168.0.37:3000/api/v1/me')
      state.user = user
      next()
    } catch (err) {
      console.log('err', err)
      next('/login') // redirect to login if user is not authenticated
    }
  }
  const routes = [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter // notice this new property
    }

  ]

  return new VueRouter({
    routes
  })
}

export default createRouter
