<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
			<view class="slot-wrapper">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>
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
