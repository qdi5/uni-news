<template>
	<view class="list-wrapper">
		<view class="list">
			<list-card v-for="listItem in listItemData" :listItem="listItem" :key="listItem._id"></list-card>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentIndex: 0,
			myIndex: 0,
			tagName: {
				type: String,
				default: '后端开发'
			}
		},
		data() {
			return {
				listItemData: null,
				page: 1
			};
		},
		created () {
			// 标识数据是否已经成功加载过一次了
			this.isDataLoaded = false
			console.log('created')
		},
		methods: {
			getList() {
				this.$api.get_list({name: this.tagName, page: this.page}).then(res => {
					console.log('获取列表：', res.data)
					let oldData = this.listItemData || []
					this.listItemData = [...oldData, ...res.data]
					this.isDataLoaded = true
				}).catch(error => {
					console.log('获取列表出错', error)
				})
			},
			loadMore() {
				console.log('当前页数：',this.page)
				this.page++
				this.getList()
				console.log('哈哈，六一快乐')
			}
		},
		watch: {
			currentIndex: {
				handler() {
					if (!this.isDataLoaded && this.currentIndex === this.myIndex) {
						console.log(`加载${this.myIndex}数据啦`)
						this.getList()
					}
				},
				immediate: true
			} 
		}
	}
</script>

<style lang="scss" scoped>
.list {
	font-size: 12px;
	padding: 10px;
}
</style>
