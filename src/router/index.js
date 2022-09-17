import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import StoreView from '../views/StoreView.vue'
import SearchView from '../views/SearchView.vue'
import BulletinView from '../views/BulletinView.vue'
import ArticleView from '../views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout-index',
      component: DefaultLayout,
      children:[
        {
          path:'',
          name:'index',
          component: IndexView,
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginLayout-login',
      component: LoginLayout,
      children:[
        {
          path:'',
          name:'login',
          component: LoginView
        }
      ]
    },
    {
      path: '/signup',
      name: 'LoginLayout-signup',
      component: LoginLayout,
      children:[
        {
          path:'',
          name:'signup',
          component: SignUpView
        }
      ]
    },
    {
      path: '/store',
      name: 'DefaultLayout-store',
      component: DefaultLayout,
      children:[
        {
          path:'',
          name:'store',
          component: StoreView
        }
      ]
    },
    {
      path: '/search',
      name: 'DefaultLayout-search',
      component: DefaultLayout,
      children:[
        {
          path:'',
          name:'searchResult',
          component: SearchView
        }
      ]
    },
    {
      path: '/bulletin',
      name: 'DefaultLayout-bulletin',
      component: DefaultLayout,
      children:[
        {
          path:'',
          name:'bulletin',
          component: BulletinView
        }
      ]
    },
    {
      path: '/article',
      name: 'DefaultLayout-article',
      component: DefaultLayout,
      children:[
        {
          path:'',
          name:'article',
          component: ArticleView,
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
