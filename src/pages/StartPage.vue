<template>
	<div class="startPageWrapper">
		<div class="logoWrapper">
			<img src="../assets/images/neovox_logo.svg" alt="" />
		</div>
		<my-main-button style="margin-top: 20px; width: 70%"
			>Магазин</my-main-button
		>
		<my-main-button style="margin-top: 20px; width: 70%"
			>Задания</my-main-button
		>
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
		width: 40%;
		margin-top: 100px;
		align-items: center;
	}
	.logoWrapper {
		margin-bottom: 30px;
	}
</style>
