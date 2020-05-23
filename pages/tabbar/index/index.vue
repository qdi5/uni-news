<template>
	<view class="content">
		<navbar></navbar>
		<tab></tab>
		<view v-for="item in 100" :key="item">{{ item }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	
</style>
