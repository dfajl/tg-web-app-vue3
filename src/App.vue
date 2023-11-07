<template>
	<router-view></router-view>
</template>

<script>
	import useTelegram from '@/hooks/useTelegram';
	import styles from './assets/styles/style.module.css';
	export default {
		name: 'App',
		components: {},
		setup() {
			useTelegram();
		},
	};
</script>

<style lang="scss"></style>
