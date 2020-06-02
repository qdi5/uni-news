<template>
	<view class="list-wrapper">
		<view class="list">
			<list-card v-for="listItem in listItemData" :listItem="listItem" :key="listItem._id"></list-card>
		</view>
		<uni-load-more v-if="listItemData === null || listItemData.length > 5" :status="loadStatus"></uni-load-more>
	</view>
</template>

<script>
	export default {
		props: {
			currentIndex: 0,
			myIndex: 0,
			tagName: {
				type: String,
				default: '全部'
			}
		},
		data() {
			return {
				listItemData: null,
				page: 1,
				loadStatus: 'loading'
			};
		},
		created () {
			// 标识数据是否已经成功加载过一次了
			this.isDataLoaded = false
			this.isLoadedAll = false
			console.log('created')
		},
		methods: {
			getList() {
				this.$api.get_list({name: this.tagName, page: this.page}).then(res => {
					const newData = res.data
					this.isDataLoaded = true
					if (!newData || !newData.length) {
						this.isLoadedAll = true
						this.loadStatus = 'noMore'
						return
					}
					console.log('获取列表：', newData)
					let oldData = this.listItemData || []
					this.listItemData = [...oldData, ...newData]
				}).catch(error => {
					console.log('获取列表出错', error)
				})
			},
			loadMore() {
				console.log('当前页数：',this.page)
				if (!this.isLoadedAll) {
					this.page++
					this.getList()
				}
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
