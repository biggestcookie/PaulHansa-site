import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home.vue",
    component: Home,
    meta: {
      title: "Paul Hansa - Home"
    }
  },
  {
    path: "/dev",
    name: "Dev.vue",
    component: () => import("../views/Dev.vue"),
    meta: {
      title: "Paul Hansa - Dev Projects"
    }
  },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: to => (to?.hash ? { el: to.hash } : { top: 0, left: 0 })
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
