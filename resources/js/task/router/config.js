import {
  LayoutAuth,
  LayoutDefault,
  RouteWrapper
} from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('@/views/auth/Login.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/user',
    children: [
      {
        path: '/user',
        name: 'user',
        meta: {
          title: 'user',
          group: 'apps',
          icon: 'mdi-account'
        },
        component: () => import('@/views/user/UserList.vue')
      },
      {
        path: '/task',
        name: 'task',
        meta: {
          title: 'task',
          group: 'apps',
          icon: 'mdi-view-list'
        },
        component: () => import('@/views/task/TaskList.vue')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hiddenInMenu: true
        },
        component: () => import('@/views/error/Deny.vue')
      }
    ]
  },
]
