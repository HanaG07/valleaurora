import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import UsuariosView from './views/UsuariosView.vue'
import InquilinosView from './views/InquilinosView.vue'
import ServiciosView from './views/ServiciosView.vue'

import './assets/main.css'
import SucursalView from './views/SucursalView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: HomeView},
        {path: '/Usuarios', component: UsuariosView},
        {path: '/Inquilinos', component: InquilinosView},
        {path: '/Servicios', component: ServiciosView},
        {path: '/Sucursal', component: SucursalView},
        {path: '/NotFoundView', component: NotFoundView}
    ]
})

const app = createApp(App);

app.use(router);
app.mount('#app');
