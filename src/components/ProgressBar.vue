<template>
	<div class="progressBarWrapper">
		<slot></slot>
		<v-progress-circular
			class="ml-2"
			:size="20"
			:width="2"
			indeterminate
			color="rgba(61, 163, 240, 0.484)"
		></v-progress-circular>
	</div>
</template>

<script>
	export default {
		name: 'ProgressBar',
	};
</script>

<style lang="scss">
	.progressBarWrapper {
		margin-top: 300px;
		text-align: center;
		margin-bottom: 1000px; //Чтобы скролл не прыгал и не вызывал получение данных при первой загрузке 2 раза
		span {
			font-size: 20px;
			color: rgba(61, 163, 240, 0.484);
			margin: 0 auto;
		}
	}
</style>
