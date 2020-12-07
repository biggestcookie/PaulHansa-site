import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home.vue",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects.vue",
    component: () => import("../views/Projects.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0, left: 0 })
});

export default router;
