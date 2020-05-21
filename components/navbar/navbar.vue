<template>
	<view>
		<view class="navbar">
			<view class="navbar-fixed">
				<view class="navbar-content">
					<view class="navbar-search">
						<view class="navbar-search_icon icon">
							<uni-icons type="search" size="16" color="#999"></uni-icons>
						</view>
						<view class="navbar-search_text">uni-app、vue</view>
					</view>
				</view>
				
			</view>
		</view>
		<view v-for="i in 100" :key="i">{{i}}</view>
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

<style lang="scss">
	.navbar {
		padding-top: 45px;
	}
	.navbar-fixed {
		position: fixed;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 45px;
		background: #f07373;
	}
	.navbar-content {
		width: 100%;
		padding: 0 25px;
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
