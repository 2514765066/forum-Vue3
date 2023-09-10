import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			component: () => import("@/views/Home/index.vue"),
		},
		{
			path: "/topic",
			component: () => import("@/views/Topic/index.vue"),
		},
		{
			path: "/question",
			component: () => import("@/views/Question/index.vue"),
		},
		{
			path: "/article",
			component: () => import("@/views/Article/index.vue"),
		},
		{
			path: "/mine",
			component: () => import("@/views/Mine/index.vue"),
		},
	],
});

export default router;
