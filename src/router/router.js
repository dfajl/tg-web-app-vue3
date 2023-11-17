import StartPage from '@/pages/StartPage';
import QuestsList from '@/pages/QuestsList';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		component: StartPage,
		name: 'startPage',
	},
	{
		path: '/questsList',
		component: QuestsList,
		name: 'questsList',
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
