import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Page from "../components/Page.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Page,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AddProduct.vue"),
  },
  {
    path: "/permissions",
    name: "Permissions",
    component: () => import("../components/Permissions.vue"),
  },
  {
    path: "/point-of-sale",
    name: "PointOfSale",
    component: () => import("../components/PointOfSale.vue"),
  },
  {
    path: "/reported-data",
    name: "ReporteTools",
    component: () => import("../components/ReportTools.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
