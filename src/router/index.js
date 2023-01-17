import Vue from 'vue'
import VueRouter from 'vue-router';

import ProjectsPage from "../views/ProjectsPage";
import DashboardPage from "../views/DashboardPage"
import TeamPage from "../views/TeamPage"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/team",
    name: "TeamPage",
    component: TeamPage,
  }
];

const router = new VueRouter({
    mode: 'history',
    base:(process.env.BASE_URL),
    routes,
});

export default router;
