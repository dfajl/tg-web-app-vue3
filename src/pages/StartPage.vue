<template>
	<div class="startPageWrapper">
		<div class="logoWrapper">
			<img src="../assets/images/neovox_logo.svg" alt="neovox_logo" />
		</div>
		<my-main-button class="startPageBtn">Магазин</my-main-button>
		<my-main-button
			class="startPageBtn"
			@click="$router.push('/questsList')"
			>Задания</my-main-button
		>
	</div>
</template>

<script>
	import useTelegram from '@/hooks/useTelegram';
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	import { useStore } from 'vuex';
	import { useRoute } from 'vue-router';
	//import { mapActions, mapState, mapMutations } from 'vuex';
	export default {
		setup() {
			let telegram = ref(null);
			const { tg } = useTelegram();
			telegram.value = tg.MainButton.color;

			return { telegram };
		},
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
