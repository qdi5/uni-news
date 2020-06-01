<template>
	<swiper :current="currentIndex" class="swiper-self" @change="handleChange">
		<swiper-item v-for="(item, index) in tab" :key="item._id">
			<list-scroll @loadmore="loadMore">
				<home-list ref="homeListRef" :tagName="item.name" :currentIndex="currentIndex" :myIndex="index"></home-list>
			</list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default: () => [],
				required: true
			},
			currentTab: {
				required: true,
				type: Object
			}
		},
		data() {
			return {
				currentIndex: this.currentTab.currentIndex,
				initTab: this.currentTab
			};
		},
		methods: {
			handleChange(event) {
				console.log('swiper切换咯：',event.detail)
				this.$emit('change-swiper-item', event.detail)
				this.currentIndex = event.detail.current
			},
			loadMore() {
				// debugger
				console.log(this.$refs.homeListRef[this.currentIndex])
				this.$refs.homeListRef[this.currentIndex].loadMore()
			}
		},
		watch: {
			currentTab(newVal, oldVal) {
				if (typeof newVal.currentIndex === 'number') {
					this.currentIndex = newVal.currentIndex
				}
			},
			// 监听tab的变化，切换到对应的swiper-item
			/* 'currentTab': {
				handler (newVal, oldVal) {
					console.log('tab变化啦：', newVal, oldVal)
					//if (newVal.currentIndex !== oldVal.currentIndex) {
						
					//}
				},
				deep: true
			} */
			/* 'currentTab.currentIndex': {
				handler(newVal, oldVal) {
					console.log('监听currentTab.currentIndex:',newVal,oldVal)
					this.currentIndex = newVal
				}
			} */
		}
	}
</script>

<style lang="scss" scoped>
.swiper-self {
	height: 100%;
}
</style>
