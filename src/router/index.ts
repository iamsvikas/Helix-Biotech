import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Page from "../components/inventory/Page.vue";

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
      import(
        /* webpackChunkName: "about" */ "../components/inventory/AddProduct.vue"
      ),
  },
  {
    path: "/permissions",
    name: "Permissions",
    component: () => import("../components/permissions/Permissions.vue"),
  },
  {
    path: "/point-of-sale",
    name: "PointOfSale",
    component: () => import("../components/retails/PointOfSale.vue"),
  },
  {
    path: "/reported-data",
    name: "ReporteTools",
    component: () => import("../components/salesData/ReportTools.vue"),
  },
  {
    path: "/customer",
    name: "CustomersDetails",
    component: () =>
      import("../components/customerProfile/CustomerDetails.vue"),
  },
  {
    path: "/add-customer",
    name: "AddCustomer",
    component: () => import("../components/customerProfile/AddCustomer.vue"),
  },
  {
    path: "/customer-profiles",
    name: "CustomerDetails",
    component: () =>
      import("../components/customerProfile/CustomerDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
