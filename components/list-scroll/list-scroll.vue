<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMore">
			<view class="slot-wrapper">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			loadMore() {
				// console.log('触发了上拉加载', this.index ? (++this.index) : (this.index=1))
				this.$emit('loadmore')
			}
		}
	}
</script>
<style lang="scss" scoped>
.scroll {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
}
.list-scroll {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.slot-wrapper {
	height: 100%;
}
</style>
