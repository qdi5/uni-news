<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll">
			<view class="scroll-wrapper">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>
<style lang="scss">
.scroll {
	flex: 1;
	overflow: hidden;
}
.list-scroll, .scroll-wrapper {
	height: 100%;
}
</style>
