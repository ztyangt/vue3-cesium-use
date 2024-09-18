import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layouts/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: { name: 'demo-test' },
    children: [
      {
        path: '/test',
        name: 'demo-test',
        component: () => import('../views/test.vue'),
        meta: {
          title: '测试页面'
        }
      }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
