import { createRouter, createWebHistory } from "vue-router"

import TasksList from "./pages/TasksList.vue"
import TaskForm from "./pages/TaskForm.vue"
import MainPage from "./pages/MainPage.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: MainPage,
		},
		{ path: "/tasks", component: TasksList },
		{ path: "/form", component: TaskForm },
	],
})

export default router
