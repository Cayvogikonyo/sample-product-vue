import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/add-product',
    name: 'addProduct',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/AddProduct.vue')
  },
  {
    path: '/add-supplier',
    name: 'addSupplier',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/AddSupplier.vue')
  },
  {
    path: '/new-order',
    name: 'newOrder',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/NewOrder.vue')
  },
  {
    path: '/new-supply',
    name: 'newSupply',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/NewSupply.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Products.vue')
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Suppliers.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Orders.vue')
  },
  {
    path: '/product-suppliers',
    name: 'ProductSupplies',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/ProductSupplies.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Dashboard.vue')

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
