<template>
	<view>
		<view class="navbar" :style="'padding-top:' + (statusBarHeight + navbarHeight) + 'px'">
			<view class="navbar-fixed">
				<view class="placeholder" :style="'height:' + statusBarHeight + 'px'"></view>
				<view class="navbar-content" :style="'height:' + navbarHeight + 'px;width:' + navbarWidth + 'px'">
					<view class="navbar-search">
						<view class="navbar-search_icon icon">
							<uni-icons type="search" size="16" color="#999"></uni-icons>
						</view>
						<view class="navbar-search_text">uni-app、vue</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight: 45,
				navbarWidth: 375
			};
		},
		created () {
			const info = uni.getSystemInfoSync()
			// 获取状态栏的高度
			const statusBarHeight = this.statusBarHeight = info.statusBarHeight
			// 默认设置为窗口的宽度，避免在不支持getMenuButtonBoundingClientRect平台下，宽度不正确
			this.navbarWidth = info.windowWidth
			// 获取胶囊的位置
			// #ifndef H5 | APP-PLUS | MP-ALIPAY
			const pill = uni.getMenuButtonBoundingClientRect()
			const left = pill.left
			const bottom = pill.bottom
			const top = pill.top
			const right = pill.right
			// 动态设置顶部搜索框的高度、宽度
			this.navbarHeight = bottom - statusBarHeight + (top - statusBarHeight)
			this.navbarWidth = left
			// #endif
		}
		
	}
</script>

<style lang="scss" scoped>
	.navbar {
		padding-top: 45px;
	}
	.navbar-fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		background: #f07373;
	}
	.navbar-content {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.navbar-search {
		width: 100%;
		height: 30px;
		display: flex;
		box-sizing: border-box;
		background: #fff;
		border-radius: 30px;
		align-items: center;
		padding: 0 10px;
		font-size: 12px;
		.navbar-search_icon {
			margin-right: 10px;
		}
		.navbar-search_text {
			flex: 1;
			line-height: 1.5;
			color: #999;
		}
	}
	
</style>
