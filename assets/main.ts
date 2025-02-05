import "./styles.scss";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Autocomplete, Button, Dropdown, Switch, Radio, Skeleton,  Field, Tooltip, Modal, Config } from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import { createPinia } from "pinia";
import config from "./stores/config";
import App from "./App.vue";
import { Container, Settings, Index, Show, ContainerNotFound, PageNotFound, Login } from "./pages";

const routes = [
  {
    path: "/",
    component: Index,
    name: "default",
  },
  {
    path: "/container/:id",
    component: Container,
    name: "container",
    props: true,
  },
  {
    path: "/container/:pathMatch(.*)",
    component: ContainerNotFound,
    name: "container-not-found",
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
  },
  {
    path: "/show",
    component: Show,
    name: "show",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
    name: "page-not-found",
  },
];

const router = createRouter({
  history: createWebHistory(`${config.base}/`),
  routes,
});

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Autocomplete)
  .use(Button)
  .use(Dropdown)
  .use(Switch)
  .use(Tooltip)
  .use(Modal)
  .use(Radio)
  .use(Field)
  .use(Skeleton)
  .use(Config, bulmaConfig)
  .mount("#app");
