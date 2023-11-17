import { computed } from 'vue';

export default function returnStoreStateQuestsData(store) {
	/* 
		функция возвращает данные стейта (глобального и стейта модуля) в зависимости от имени текущей страницы routeName
	*/

	const defaultState = { ...store.state.questsAndEvents }; //первоначально записанный стейт данного модуля (для очистки при onBeforeUnmount)

	//const questsData = store.state.questsModule.questsData;
	const quests = computed(() => store.getters['questsModule/quests']);
	console.log(quests);

	return {
		quests,
		defaultState,
	};
}
