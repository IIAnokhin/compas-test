import { createWebHistory, createRouter } from "vue-router";
import News from "@/views/News.vue";
import Create from "@/views/Create.vue";

const routes = [
    {
        path: "/",
        name: "News",
        component: News,
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;