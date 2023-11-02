<template>
	<div class="startPageWrapper">
		<div class="logoWrapper">
			<img src="../assets/images/neovox_logo.svg" alt="" />
		</div>
		<my-main-button class="startPageBtn">Магазин</my-main-button>
		<my-main-button class="startPageBtn">Задания</my-main-button>
	</div>
</template>

<script>
	import { mapActions, mapState, mapMutations } from 'vuex';
	export default {
		components: {},
		name: 'my-auth',
		data: () => ({}),
		methods: {},
		computed: {},
	};
</script>

<style lang="scss" scoped>
	.startPageWrapper {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		width: 80%;
		margin-top: 150px;
		align-items: center;
		.logoWrapper {
			display: flex;
			align-self: center;
			margin-bottom: 80px;
			width: 80%;
			img {
				width: 100%;
			}
		}
		.startPageBtn {
			margin-top: 30px;
			width: 70%;
			font-size: 17px;
			height: 50px;
		}
	}
</style>
