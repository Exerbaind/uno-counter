import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import History from "../views/History.vue";
import Rules from "../views/Rules.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/game',
        component: Game
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/rules',
        component: Rules
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;