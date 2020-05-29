<template>
	<view class="list-wrapper">
		<view class="list">
			<list-card mode="default"></list-card>
			<list-card mode="bigImg"></list-card>
			<list-card v-for="item in 3" mode="smallImg" :key="item"></list-card>
			<list-card mode="default"></list-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.list {
	font-size: 12px;
	padding: 10px;
}
</style>
