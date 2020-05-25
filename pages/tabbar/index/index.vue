<template>
	<view class="content">
		<navbar></navbar>
		<tab :tabList="tabList"></tab>
		<view v-for="item in 100" :key="item">{{ item }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel () {
				this.$api.get_label().then(res => {
					this.tabList = res.data
				})
			}
		}
	}
</script>

<style scoped>
	
</style>
