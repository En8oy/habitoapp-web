import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Public/base/Home.vue";
import About from "../pages/Public/base/About.vue";

import Public from "../pages/Public/Public.vue";
import Auth from "../pages/Auth/Auth.vue";
import Dashboard from "../pages/Auth/base/Dashboard.vue";

let auth = (to: any, from: any, next: any) => {
  let auth: boolean = true;
  if (auth) {
    next();
  }
  next({ name: "PublicHome" });
};

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "PublicIndex",
    component: Public,
    redirect: "/home",
    children: [
      { path: "home", name: "PublicHome", component: Home },
      { path: "about", name: "PublicAbout", component: About },
    ]
  },
  {
    path: "/auth",
    component: Auth,
    redirect: "/dashboard",
    beforeEnter: (to: any, from: any, next: any) => auth(to, from, next),
    children: [
      { path: "dashboard", component: Dashboard, name: "PublicDashboard" },
    ],
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
