import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Weather from './pages/Weather.vue';
import About from './pages/About.vue';
import App from './App.vue';
import Settings from './pages/Settings.vue';

import './styles/main.css';

const routes = [
  { path: '/', component: Weather },
  { path: '/about', component: About },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
