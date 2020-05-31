<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view @click="handleItemClick(tab, index)" class="tab-scroll-item" :class="{active: index === currentIndex}" v-for="(tab, index) in tabList" :key="index">
					{{ tab.name }}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				required: true,
				type: Array,
				default: () => []
			},
			index: 0
		},
		data () {
			return {
				currentIndex: this.index
			};
		},
		methods: {
			handleItemClick(tab, currentIndex) {
				this.currentIndex = currentIndex
				this.$emit('tab', {
					tab,
					currentIndex
				})
			}
		},
		watch: {
			index (newValue) {
				if (newValue !== this.currentIndex) {
					this.currentIndex = newValue
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			
			.tab-scroll-box {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 45px;
				box-sizing: border-box;
			}
			.tab-scroll-item {
				flex-shrink: 0;
				padding: 0 10px;
				color: #333;
				font-size: 14px;
				&.active {
					color: #f07373;
				}
			}
		}
		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 12px;
				bottom: 12px;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
	
</style>
