import $http from '../http.js'

// 自动导入当前目录下的所有文件的默认模块
const context = require.context('.', false, /\.js$/)
const result = {}
// context.keys() 返回一个数组，包含所有可能被context模块处理的请求（也就是能被import的请求地址）
context.keys().forEach((item, index) => {
	console.log('导入所有的包：', context(item))
	if (item === './http.js' || item === './index.js') return
	// 找到当前文件导出的默认模块，合并到result里
	Object.assign(result, context(item).default)
})

export default result

// 以上的代码的作用等同于下面这段代码：
/* 
import api2 from './api2.js'
import api2 from './api3.js'
import api2 from './api4.js'

export default Object.assign({},{
	get_label,
	get_list
},api2,api3,api4) */