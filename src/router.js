import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name:'Home',
        component: () => import("@/views/Home/IndexPage.vue"),
    },
    {
        path: "/employee/:id",
        name:'Employee',
        component: () => import("@/views/Employee/IndexPage.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
