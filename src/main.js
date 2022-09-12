import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Weather from './pages/Weather.vue';
import About from './pages/About.vue';
import Subscribe from './pages/Subscribe.vue';
import Settings from './pages/Settings.vue';
import App from './App.vue';
import naive from 'naive-ui';

import './styles/main.css';

const routes = [
  { path: '/', name: 'weather', component: Weather },
  { path: '/about', name: 'about', component: About },
  { path: '/Subscribe', name: 'subscribe', component: Subscribe },
  { path: '/settings', name: 'settings', component: Settings }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(naive);
app.mount('#app');
