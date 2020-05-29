<template>
	<view>
		<view class="list-item" v-if="mode === 'default'">
			<view class="img-wrapper">
				<image class="img" mode="aspectFill" src="../../static/logo.png"></image>
			</view>
			<view class="text">
				<view class="title">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">前端</view>
						<view class="type">后端</view>
					</view>
					<view class="view">120浏览</view>
				</view>
			</view>
		</view>
		<view class="list-item img-big-mode" v-else-if="mode === 'bigImg'">
			<view class="img-wrapper">
				<image class="img" mode="aspectFill" src="../../static/logo.png"></image>
			</view>
			<view class="text">
				<view class="title">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">前端</view>
						<view class="type">node</view>
					</view>
					<view class="view">120浏览</view>
				</view>
			</view>
		</view>
		<view class="list-item img-small-mode" v-else-if="mode === 'smallImg'">
			<view class="img-wrapper">
				<image class="img" mode="aspectFill" src="../../static/logo.png"></image>
				<image class="img" mode="aspectFill" src="../../static/logo.png"></image>
				<image class="img" mode="aspectFill" src="../../static/logo.png"></image>
			</view>
			<view class="text">
				<view class="title">uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架uni-app开发框架</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">前端</view>
						<view class="type">vue</view>
					</view>
					<view class="view">120浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				default: 'default',
				validator: function(val) {
					console.log('验证mode字段：',val)
					return ['default','bigImg','smallImg'].indexOf(val) !== -1
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.list-item {
		display: flex;
		flex-direction: row;
		margin-top: 20px;
		.img-wrapper {
			display: flex;
		}
		&.img-big-mode {
			flex-direction: column;
			.img-wrapper {
				width: 100%;
				height: 100px;
			}
			.img {
				width: 100%;
				height: 100%;
				max-width: 100%;
				
			}
			.text {
				.title {
					margin-top: 10px;
				}
				
			}
		}
		&.img-small-mode {
			flex-direction: column;
			.img-wrapper {
				width: 100%;
				height: 100px;
				.img {
					display: block;
					height: 100%;
					flex: 1;
					& + .img {
						margin-left: 8px;
					}
					
				}
				margin-bottom: 10px;
			}
			.text {
				.title {
					margin-top: 10px;
				}
			}
			
		}
		.img {
			width: 60px;
			height: 60px;
		}
		.text {
			display: flex;
			margin-left: 10px;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
		}
	}
	.text {
		.title {
			font-size: 14px;
			font-weight: 400;
			line-height: 1.2;
			margin-bottom: 10px;
			@include multi-ellipsis;
		}
	}
	.other {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.type-wrapper {
			font-size: 0;
			.type {
				display: inline-block;
				box-sizing: border-box;
				border: 1px solid red;
				border-radius: 30px;
				background: #fff;
				padding: 2px 10px;
				color: red;
				font-size: 12px;
				line-height: normal;
				& + .type {
					margin-left: 3px;
				}
			}
		}
		.view {
			color: #999;
		}
	}
	
</style>
