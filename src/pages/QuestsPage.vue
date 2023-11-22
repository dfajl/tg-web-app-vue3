<template>
	<ProgressBar v-if="isLoading">
		<span> Loading... </span>
	</ProgressBar>
	<QuestsList v-else class="questsMainWrapper" :quests="quests"> </QuestsList>
</template>

<script>
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	import { useStore } from 'vuex';
	import { useRoute } from 'vue-router';

	import useStoreStateQuestsData from '@/hooks/quests/useStoreStateQuestsData';

	export default {
		setup() {
			const store = useStore();

			//получаем данные из стора
			const { quests, defaultState, isLoading } =
				useStoreStateQuestsData(store);

			onMounted(() => {
				store.dispatch('authorization'); //там временный хардкод для теста
				store.dispatch('questsModule/getQuestsData'); //там временный хардкод для теста
			});
			onBeforeUnmount(() => {
				/* 	
					очистка стейта при уничтожении компонента.
					если юзать onUnmounted, то стейт модуля не успевает очиститься до запуска setup() нового
					компонента	
				*/
				store.commit('questsModule/clearQuestsState', defaultState);
			});

			return { quests, isLoading };
		},
	};
</script>

<style lang="scss" scoped></style>
