import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contato",
    name: "Contato",
    component: () =>
     import( "../views/Contato.vue")
  },
  {
    path: "/delegacias",
    name: "Delegacias",
    component: () =>
     import( "../views/Delegacias.vue")
  },
  {
    path: "/hospitais",
    name: "Hospitais",
    component: () =>
     import( "../views/Hospitais.vue")
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: () =>
     import( "../views/Eventos.vue")
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: () =>
     import("../components/Navbar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
