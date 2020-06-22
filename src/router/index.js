import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Player2 from '../components/Player2.vue'
import Index from '../pages/Index.vue'
import Song from '../pages/Song.vue'
import Album from '../pages/Album.vue'
import Artist from '../pages/Artist.vue'
import User from '../pages/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/',
        name:'Index',
        component:Index
      },
      {
        path:'/song',
        name:'Song',
        component:Song
      },
      {
        path:'/album',
        name:'Album',
        component:Album
      },
      {
        path:'/artist',
        name:'Artist',
        component:Artist
      },
      {
        path:'/user',
        name:'User',
        component:User
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Player2',
    name: 'Player2',
    component: Player2
  },
]

const router = new VueRouter({
  routes
})

export default router
