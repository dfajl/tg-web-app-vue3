import { createStore } from 'vuex';
import router from '@/router/router';
import { questsModule } from '@/store/questsModule';

export const store = createStore({
	state: () => ({}),
	mutations: {},
	getters: {},
	actions: {
		async authorization() {
			try {
				const response = await fetch(
					'http://10.254.6.111:9991/user/verifications/',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json;charset=utf-8',
						},
						body: JSON.stringify({
							login: 'admin',
							password: '12345',
						}),
					},
				);

				if (response.status === 200) {
					const { access_token, refresh_token } =
						await response.json(); //в ответе - токены авториации

					localStorage.setItem('accessToken', access_token);
					localStorage.setItem('refreshToken', refresh_token);

					console.log(access_token);
					console.log(refresh_token);
				} else if (response.status === 401) {
					message = 'Введенный логин и (или) пароль не свопадают';
					commit('setOtherInfo', message);
				} else if (response.status === 403) {
					message = 'Данный пользователь заблокирован';
					commit('setOtherInfo', message);
				} else if (response.status === 404) {
					message = '404 Not Found';
					commit('setErrorMessage', message, { root: true });
					router.push(`ErrorPage/${moduleName}`);
				} else {
					const rejection = `Sorry! The server responded with a status: ${response.status}`;
					commit('setRejectionMessage', rejection, { root: true });
					router.push(`ErrorPage/${moduleName}`);
				}
			} catch (error) {
				console.dir(error);
			} finally {
			}
		},
	},
	modules: {
		questsModule,
	},
});
