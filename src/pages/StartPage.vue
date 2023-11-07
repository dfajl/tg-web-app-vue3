<template>
	<div class="startPageWrapper">
		<div class="logoWrapper">
			<img src="../assets/images/neovox_logo.svg" alt="neovox_logo" />
		</div>
		<span>{{ tg }}</span>
		<my-main-button class="startPageBtn" @click="showDataUser"
			>Магазин</my-main-button
		>
		<span>{{ userData }}</span>
		<!-- <my-main-button class="startPageBtn">Задания</my-main-button> -->
	</div>
</template>

<script>
	import useTelegram from '@/hooks/useTelegram';
	import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
	import { useStore } from 'vuex';
	import { useRoute } from 'vue-router';
	//import { mapActions, mapState, mapMutations } from 'vuex';
	export default {
		setup() {
			let userData = ref(null);
			//onMounted(() => {
			const { tg, user } = useTelegram();
			function showDataUser() {
				userData.value = 'string';
			}

			//});
			/* onMounted(() => {
				window.Telegram.WebApp.MainButton.show();
				window.Telegram.WebApp.onEvent(
					'mainButtonClicked',
					handleMainButtonClick,
				);
			}); */

			/* watchEffect(() => {
				tg.ready();
				window.Telegram.WebApp.MainButton.show();
			});

			const handleMainButtonClick = () => {
				// Обработка события нажатия на кнопку "mainButton"
				console.log('Нажата кнопка mainButton');
				// Дополнительные действия, которые вы хотите выполнить при нажатии на кнопку
			}; */
			return { tg, showDataUser, userData, user };
		},
	};
</script>

<style lang="scss" scoped>
	/* body {
		background: var(--tg-theme-bg-color);
		color: var(--tg-theme-text-color);
	} */
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
			width: 65%;
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
