import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Public/Home.vue";
import About from "../pages/Public/About.vue";
import Statics from "../pages/Auth/Statics.vue"

const routes = [
  { path: "/", component: Home },
	{ path: "/about", component: About },
  { path: "/statics", component: Statics },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;