# 一个基于uniCloud和uniapp的新闻类跨端项目
## 重难点
1. require.context(dir, flag, regExp)    
	dir： 目录；
	flag：Boolean值；表示是否递归检索子目录；
	regExp：正则表达式
	检索dir目录，将符合正则表达式的所有文件，一一生成对应的可以使用import导入的模块对象；
2. 首页列表的滚动；
	`<scroll-view></scroll-view>`组件的使用
3. 在微信小程序中计算首页搜索框高度
	获取胶囊的位置对象：    
	```javascript
	// 获取小程序中胶囊的位置对象
	const jn = uni.getMenuButtonBoundingClientRect()
	jn.bottom - (jn.top - 状态栏的高度)
	```
   
	