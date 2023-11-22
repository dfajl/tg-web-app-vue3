import router from '@/router/router';
export const questsModule = {
	state: () => ({
		questsData: [],
		questData: [],
		limit: 20, // кол-во отрисованных строк за один запрос на API по дефолту
		offset: 0,
		isLoading: true,
	}),
	getters: {
		quests(state) {
			const quests = [...state.questsData];
			return quests;
		},
		quest(state) {
			const quest = { ...state.questData };
			return quest;
		},
		isLoading(state) {
			return state.isLoading;
		},
	},
	mutations: {
		setQuestsData(state, data) {
			state.questsData = data;
		},
		setQuestData(state, data) {
			state.questData = data;
		},
		setLoading(state, bool) {
			state.isLoading = bool;
		},
		clearQuestsState(state, defaultQuestState) {
			// при onBeforeUnmount заменяем заполненный стейт на первоначальный
			for (let key of Object.keys(defaultQuestState)) {
				state[key] = defaultQuestState[key];
			}
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
					commit('setLoading', false);
					console.log(data);
				}
			} catch (error) {
				console.log(error);
			} finally {
				commit('setLoading', false);
			}
		},
		async getQuestByID({ state, commit }, { questID }) {
			let url = new URL(
				'http://10.254.6.111:9991/event_operations/events/{id}',
			);
			url.searchParams.set('quest_id', questID);
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
					commit('setQuestData', data[0]);
					console.log(data);
					commit('setLoading', false);
				}
			} catch (error) {
				console.log(error);
			} finally {
				commit('setLoading', false);
			}
		},
	},
	namespaced: true,
};
