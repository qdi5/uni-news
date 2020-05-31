<template>
	<swiper :current="currentIndex" class="swiper-self" @change="handleChange">
		<swiper-item v-for="(item, index) in tab" :key="item._id">
			<list-scroll>
				<home-list></home-list>
			</list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default: () => []
			},
			currentTab: {
				type: Object,
				default: () => {
					currentIndex: 0
				}
			}
		},
		data() {
			return {
				currentIndex: this.currentTab.currentIndex
			};
		},
		methods: {
			handleChange(event) {
				console.log('swiper切换咯：',event.detail)
				this.$emit('change-swiper-item', event.detail)
				this.currentIndex = event.detail.current
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
