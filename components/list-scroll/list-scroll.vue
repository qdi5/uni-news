<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>
<style lang="scss">
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
</style>
