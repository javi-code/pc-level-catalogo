import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '*',
      redirect: '/inicio'
   },
   {
      path: '/inicio',
      name: 'inicio',
      component: Index,
   },
   {
      path: '/categorias',
      name: 'categorias',
      component: () => import('@/views/categorias/')
   },
   {
      path: '/productos',
      name: 'productos',
      component: () => import('@/views/productos/')
   },
   {
      path: '/producto/:id',
      name: 'producto',
      component: () => import('@/views/productos/_Producto')
   },
   {
      path: '/contactos',
      name: 'contactos',
      component: () => import('@/views/consultas/')
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
   },
   routes
});

// router.beforeEach((to, from, next) => {
//    let key = localStorage.getItem(NAMEKEY) 
//    let auth = to.matched.some(record => record.meta.auth)
//    if (!key && to.path !== '/login') {
//       next('login')
//    } else if (!auth && key) {
//       next('inicio')
//    } else {
//       next()
//    }
// });
export default router;