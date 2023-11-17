import router from '@/router/router';
export const questsModule = {
	state: () => ({
		questsData: [],
		limit: 20, // кол-во отрисованных строк за один запрос на API по дефолту
		offset: 0,
	}),
	getters: {
		quests(state) {
			const quests = [...state.questsData];
			return quests;
		},
	},
	mutations: {
		setQuestsData(state, data) {
			state.questsData = data;
		},
	},
	actions: {
		async getQuestsData({ state, commit }) {
			let url = new URL(
				'http://10.254.6.111:9991/event_operations/events/',
			);
			url.searchParams.set('offset', 0);
			url.searchParams.set('limit', 20);
			url.searchParams.set('event_type', 'Квест');

			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${localStorage.getItem(
						'accessToken',
					)}`,
					'Content-Type': 'application/json',
				},
			};

			try {
				const response = await fetch(url, options);
				console.log(response);
				if (response.status === 200) {
					let data = await response.json();
					commit('setQuestsData', data);
					console.log(data);
				}
			} catch (error) {
				alert(error);
			} finally {
			}
		},
	},
	namespaced: true,
};
