import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GuardarVehiculo from '@/components/GuardarVehiculo.vue';
import ListarVehiculos from '@/components/ListarVehiculos.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/guardarVehiculo',
    name: 'guardarVehiculo',
    component: GuardarVehiculo
  },
  {
    path: '/listarVehiculos',
    name: 'listarVehiculos',
    component: ListarVehiculos
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
