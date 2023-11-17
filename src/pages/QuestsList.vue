<template>
	<my-quest-item class="questsMainWrapper" :quests="quests"> </my-quest-item>
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
			const { quests, defaultState } = useStoreStateQuestsData(store);

			onMounted(() => {
				store.dispatch('authorization'); //там временный хардкод для теста
				store.dispatch('questsModule/getQuestsData'); //там временный хардкод для теста
			});

			return { quests };
		},
	};
</script>

<style lang="scss" scoped>
	questsMainWrapper {
		width: 80%;
	}
</style>
