<template>
	<div class="questsListWrapper">
		<div class="questItem" v-for="quest in quests" :key="quest.id">
			<div class="questItemImg" style="height: 30%">
				<img
					:src="getLinkToPicture(quest)"
					alt="quest_image"
					style="width: 40%"
				/>
			</div>
			<div class="questItemSpan">
				<span>{{ quest.header }}</span>
				<span>Коины: {{ quest.cost }}</span>
			</div>
			<MyButton class="questItemBtn" @click="openTheQuest(quest.id)"
				>Подробнее</MyButton
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'QuestsList',
		props: {
			quests: Array,
		},
		data() {
			return {
				isPageLoaded: false,
			};
		},
		methods: {
			openTheQuest(questId) {
				this.$router.push(`/questInfo/${questId}`);
			},
			getLinkToPicture(quest) {
				return quest.link_to_picture.includes('https')
					? quest.link_to_picture
					: require('../assets/images/no_picture.png');
			},
		},
	};
</script>

<style lang="scss" scoped>
	.questsListWrapper {
		margin: 0 auto;
		width: 90%;
		padding: 20px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.questItem {
			font-size: small;
			padding: 3px;
			text-align: center;
			//border: 1px solid black;
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 15px;
			flex-wrap: wrap;
			.questItemSpan {
				margin-top: 8px;
				span {
					display: block;
					margin-bottom: 5px;
				}
			}

			.questItemBtn {
				font-size: small;
				width: 80%;
				text-transform: capitalize;
				letter-spacing: normal;
				background: rgba(61, 163, 240, 0.484);
			}
		}
	}
</style>
