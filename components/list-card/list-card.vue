<template>
	<view>
		<view class="list-item" v-if="listItem.mode === 'base'">
			<view class="img-wrapper">
				<image class="img" mode="aspectFill" :src="listItem.cover[0]"></image>
			</view>
			<view class="text">
				<view class="title">{{ listItem.title }}</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">{{ listItem.classify }}</view>
						
					</view>
					<view class="view">{{ listItem.browse_count }}浏览</view>
				</view>
			</view>
		</view>
		<view class="list-item img-big-mode" v-else-if="listItem.mode === 'image'">
			<view class="img-wrapper">
				<image class="img" mode="aspectFill" :src="listItem.cover[0]"></image>
			</view>
			<view class="text">
				<view class="title">{{listItem.title}}</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">{{ listItem.classify }}</view>
						
					</view>
					<view class="view">{{ listItem.browse_count }}浏览</view>
				</view>
			</view>
		</view>
		<view class="list-item img-small-mode" v-else-if="listItem.mode === 'column'">
			<view class="img-wrapper">
				<template v-for="(img,index) in listItem.cover" :Key="index">
					<image v-if="index < 3" class="img" mode="aspectFill" :src="img"></image>
				</template>
			</view>
			<view class="text">
				<view class="title">{{ listItem.title }}</view>
				<view class="other">
					<view class="type-wrapper">
						<view class="type">{{ listItem.classify }}</view>
					</view>
					<view class="view">{{ listItem.browse_count }}浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
			listItem: {
				type: Object,
				default: () => {}
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
