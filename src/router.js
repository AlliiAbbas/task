import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/views/Home/IndexPage.vue";
import Employee from "@/views/Employee/IndexPage.vue";

const routes = [
    {
        path: "/",
        name:Home,
        component: () => import("@/views/Home/IndexPage.vue"),
    },
    {
        path: "/Employee:id",
        name:Employee,
        component: () => import("@/views/Employee/IndexPage.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


export default router;
