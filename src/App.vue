<template>
	<router-view></router-view>
</template>

<script>
	import useTelegram from '@/hooks/useTelegram';
	import styles from './assets/styles/style.module.css';
	import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
	export default {
		name: 'App',
		components: {},
		setup() {
			const { tg } = useTelegram();

			watchEffect(() => {
				tg.ready();
				window.Telegram.WebApp.MainButton.show();
				window.Telegram.WebApp.onEvent(
					'mainButtonClicked',
					handleMainButtonClick,
				);
			});
		},
	};
</script>

<style lang="scss"></style>
