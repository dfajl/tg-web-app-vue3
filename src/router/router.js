import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '@/pages/StartPage';
const routes = [
	{
		path: '/',
		component: StartPage,
		name: 'startPage',
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
