<template>
	<view class="home">
		<navbar></navbar>
		<tab @tab="handleTab" :index="currentIndex" :tabList="tabList"></tab>
		<view class="lists">
			<list v-if="tabList && tabList.length" @change-swiper-item="changeSwiperItem" :currentTab="currentTab" :tab="tabList"></list>
		</view>
	</view>
</template>
	
<script>
	export default {
		data() {
			return {
				tabList: [],
				currentTab: {
					currentIndex: 0
				},
				currentIndex: 0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel () {
				this.$api.get_label().then(res => {
				res.data.unshift({name: '全部'})
				this.tabList = res.data
			})
			},
			handleTab (payload) {
				console.log('payload')
				console.log(payload)
				this.currentTab = payload
			},
			changeSwiperItem (detail) {
				this.currentIndex = detail.current
			}
		}
	}
</script>

<style lang="scss">
page {
	display: flex;
	height: 100%;
	
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
