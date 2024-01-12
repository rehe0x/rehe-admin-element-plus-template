import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/IndexView.vue'),
      children: [
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: '/',
          component: () => import('@/layouts/HomeLayout.vue'),
          children: [
            {
              path: '/',
              component: () => import('@/views/home/Dashboard.vue')
            },
            {
              path: '/testmain',
              component: () => import('@/views/test/Test.vue')
            }
          ]
        },
        {
          path: '/dataCenter',
          component: () => import('@/layouts/DataCenterLayout.vue')
        },
        {
          path: '/log',
          component: () => import('@/layouts/LogLayout.vue')
        }
      ]
    }
  ]
})

export default router
