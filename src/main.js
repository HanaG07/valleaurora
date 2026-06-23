import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import UsuariosView from './views/UsuariosView.vue'
import InquilinosView from './views/InquilinosView.vue'
import ServiciosView from './views/ServiciosView.vue'

import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: HomeView},
        {path: '/Usuarios', component: UsuarioView},
        {path: '/Inquilinos', component: InquilinosView},
        {path: '/Servicios', component: ServiciosView}
    ]
})

const app = createApp(App);

app.use(router);
app.mount('#app');
