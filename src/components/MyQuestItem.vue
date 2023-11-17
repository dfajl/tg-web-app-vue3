<template>
	<div class="questsListWrapper">
		<div class="questItem" v-for="quest in quests" :key="quest.id">
			<img
				:src="
					quest.link_to_picture.includes('https')
						? quest.link_to_picture
						: `../assets/images/no_picture.png`
				"
				:alt="quest.picture_name"
				style="width: 30%"
			/>
			{{ quest.conditions }}
			{{ quest.cost }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my-quest-item',
		props: {
			quests: Array,
		},
		/* computed: {
			linkToPicture(){

			}
		} */
	};
</script>

<style lang="scss" scoped>
	.questsListWrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.questItem {
			font-size: small;
			padding: 3px;
			text-align: center;
			border: 1px solid black;
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
