import StartPage from '@/pages/StartPage';
import QuestsPage from '@/pages/QuestsPage';
import QuestInfo from '@/pages/QuestInfo';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		component: StartPage,
		name: 'StartPage',
	},
	{
		path: '/questsPage',
		component: QuestsPage,
		name: 'QuestsPage',
	},
	{
		path: '/questInfo/:id',
		component: QuestInfo,
		name: 'QuestsInfo',
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
