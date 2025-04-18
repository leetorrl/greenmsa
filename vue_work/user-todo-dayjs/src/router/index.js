import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MonthView from '@/views/MonthView.vue';
import LoginView from '@/views/login/LoginView.vue';
import LoginProcessView from '@/views/login/LoginProcessView.vue';
import MessageView from '@/views/MessageView.vue';
import MyPageView from '@/views/MyPageView.vue';

const loginRouter = [
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/oauth',
		name: 'oauth',
		component: LoginProcessView,
	},
];
const freeBoardRouter = [];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		...loginRouter,
		...freeBoardRouter,
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/month',
			name: 'month',
			component: MonthView,
		},
		{
			path: '/message',
			name: 'message',
			component: MessageView,
		},
		{
			path: '/mypage',
			name: 'mypage',
			component: MyPageView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
	],
});

export default router;
