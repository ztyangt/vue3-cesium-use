import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layouts/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Hooks' }
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: Layout,
    redirect: { name: 'useViewer' },
    children: [
      {
        path: 'use-viewer',
        name: 'useViewer',
        component: () => import('../views/hooks/use-viewer.vue'),
        meta: {
          title: 'useViewer'
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
