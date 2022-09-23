import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Weather from './pages/Weather.vue';
import Forecast from './pages/Forecast.vue';
import About from './pages/About.vue';
import Subscribe from './pages/Subscribe.vue';
import Settings from './pages/Settings.vue';
import App from './App.vue';

import './styles/main.css';

const routes = [
  { path: '/', component: Weather },
  { path: '/forecast', component: Forecast},
  { path: '/about', component: About },
  { path: '/Subscribe', component: Subscribe },
  { path: '/settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
