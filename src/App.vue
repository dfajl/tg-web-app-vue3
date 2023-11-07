<template>
	<router-view></router-view>
</template>

<script>
	import useTelegram from '@/hooks/useTelegram';
	import styles from './assets/styles/style.module.css';
	import { ref, onMounted, onBeforeUnmount } from 'vue';
	export default {
		name: 'App',
		components: {},
		setup() {
			onMounted(() => {
				useTelegram();
			});
		},
	};
</script>

<style lang="scss"></style>
