import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Public/base/Home.vue";
import About from "../pages/Public/base/About.vue";

import Public from "../pages/Public/Public.vue";
import Auth from "../pages/Auth/Auth.vue";
import Dashboard from "../pages/Auth/base/Dashboard.vue";


// let auth = (to: any, from: any, next: any) => {
//   console.log(to, from)
//   let auth: boolean = true;
//   if (auth) {
//     next();
//   }
//   next({ name: "PublicHome" });
// };

const publicRoutes:Array<RouteRecordRaw> = [
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
]

const authRoutes:Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: Auth,
    redirect: "auth/my-dashboard",
    // beforeEnter: (to: any, from: any, next: any) => auth(to, from, next),
    children: [
      { path: "my-dashboard", component: Dashboard, name: "PublicDashboard" },
    ],
  },
];

const routes:Array<RouteRecordRaw> = [...publicRoutes, ...authRoutes] 

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
