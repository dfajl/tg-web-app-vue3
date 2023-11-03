<template>
	<v-btn class="mainBtn">
		<slot></slot>
	</v-btn>
</template>

<script>
	export default {
		name: 'my-main-button',
	};
</script>

<style lang="scss" scoped>
	.mainBtn {
		background: #f0d9d9ad;
	}
</style>
