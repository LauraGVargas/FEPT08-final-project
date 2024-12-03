import { createWebHashHistory, 
    createRouter } from 'vue-router'

import Home from './views/Home.vue'

const routes = [
    { path: "/",
    name: "Home",
    component: Home
// poner aquí rutas siguientes
    }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes: routes
})

export default router