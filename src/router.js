import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missionCommanders",
    name: "mission-commanders",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/add",
    name: "add-mission-commander",
    component: () => import("./components/AddMissionCommander")
  },
  {
    path: "/missionCommanders/:id",
    name: "mission-commander-details",
    component: () => import("./components/MissionCommander")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
