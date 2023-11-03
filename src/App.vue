<template>
	<router-view></router-view>
</template>

<script>
	import styles from './assets/styles/style.module.css';
	export default {
		name: 'App',
		components: {},
	};
</script>

<style lang="scss">
	body {
		background: --tg-theme-bg-color;
		color: var(--tg-theme-text-color);
	}
</style>
