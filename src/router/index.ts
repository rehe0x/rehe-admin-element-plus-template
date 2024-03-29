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
          meta:{
            title: '首页'
          },
          children: [
            {
              path: '/',
              component: () => import('@/views/home/Dashboard.vue'),
              meta:{
                title: '平台概括'
              },
            },
            {
              path: '/system/user',
              component: () => import('@/views/home/system/user/IndexView.vue'),
              meta:{
                parentTitle: '系统管理',
                title: '用户管理'
              },
            },
            {
              path: '/system/role',
              component: () => import('@/views/home/system/role/IndexView.vue'),
              meta:{
                parentTitle: '系统管理',
                title: '角色管理'
              },
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
