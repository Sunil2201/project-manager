import Vue from 'vue'
import VueRouter from 'vue-router';

import aboutPage from "../views/aboutPage";
import homePage from "../views/homePage"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage,
  },
  {
    path: "/about",
    name: "aboutPage",
    component: aboutPage,
  },
];

const router = new VueRouter({
    mode: 'history',
    base:(process.env.BASE_URL),
    routes,
});

export default router;
