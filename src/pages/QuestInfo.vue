<template>
	<ProgressBar v-if="isLoading">
		<span> Loading... </span>
	</ProgressBar>
	<div class="questInfoMainWrapper" v-else>
		<div class="questInfoImgWrapper">
			<img
				:src="getLinkToPicture(quest)"
				alt="quest_image"
				style="width: 30%; display: block; margin: 0 auto"
			/>
		</div>
		<span>{{ quest.header }}</span>
		<span>{{ quest.text }}</span>
		<span>{{ quest.conditions }}</span>
		<span>{{ quest.cost }}</span>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'QuestInfo',
		props: {},
		data() {
			return {
				questID: '',
			};
		},
		methods: {
			...mapActions({
				getQuestByID: 'questsModule/getQuestByID',
			}),
			getLinkToPicture(quest) {
				return quest.link_to_picture.includes('https')
					? quest.link_to_picture
					: require('../assets/images/no_picture.png');
			},
		},
		mounted() {
			this.getQuestByID({ questID: this.$route.params.id });
		},
		computed: {
			...mapGetters({
				quest: 'questsModule/quest',
				isLoading: 'questsModule/isLoading',
			}),
		},
	};
</script>

<style lang="scss" scoped>
	.questInfoMainWrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
