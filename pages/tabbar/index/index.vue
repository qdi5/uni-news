<template>
	<view class="home">
		<navbar></navbar>
		<tab @tab="handleTab" :tabList="tabList"></tab>
		<view class="lists">
			<carousel></carousel>
		</view>
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
			},
			handleTab (payload) {
				console.log('payload')
				console.log(payload)
			}
		}
	}
</script>

<style lang="scss">
page {
	display: flex;
	height: 100%;
	background-color: red;
}
.home {
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	.lists {
		flex: 1;
		box-sizing: border-box;
		.list-card-wrapper {
			height: 100%;
		}
	}
}
</style>
