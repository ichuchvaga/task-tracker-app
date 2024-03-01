import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue';
import Home from './Home.vue';
import Tasks from './Tasks.vue';

const router = createRouter({
  history: createWebHistory('/vue/task-tracker/'),
  base: "/vue/task-tracker/",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tasks",
      component: Tasks,
    }
  ]
});

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');