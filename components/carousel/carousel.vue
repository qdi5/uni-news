<template>
	<swiper class="swiper-self" @change="handleChange">
		
			<swiper-item>
				<list-scroll>
				<home-list></home-list>
				</list-scroll>
			</swiper-item>
		
		
			<swiper-item>
				<list-scroll>
				<home-list></home-list>
				</list-scroll>
			</swiper-item>
		
		
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handleChange(event) {
				console.log(event.detail)
			}
		}
	}
</script>

<style lang="scss" scoped>
.swiper-self {
	height: 100%;
}
</style>
