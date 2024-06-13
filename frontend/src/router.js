import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/listbook",
    name: "listbook",
    component: () => import("./components/ListBook")
  },
  {
    path: "/create",
    alias: "/createbook",
    name: "createbook",
    component: () => import("./components/CreateBook")
  },
  {
    path: "/edit",
    alias: "/edit/:id",
    name: "editbook",
    component: () => import("./components/EditBook")
  },
  {
    path: "/delete",
    alias: "/delete/:id",
    name: "deletebook",
    component: () => import("./components/ListBook")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;