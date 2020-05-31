'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const { name, page = 1, pageSize = 2 } = event
	debugger
  //event为客户端上传的参数
  /* const list = await db.collection('article').
	  field({
		  content: false
	  }).
	  get() */
  let matchObj = {}	  
  if (name !== '全部') {
	  matchObj = {
		classify: name
	  }
  }
  // 聚合：更精细化的去处理数据 求和、分组，指定哪些字段
  const list = await db.collection('article').
	// 聚合函数
	aggregate().
	// 匹配指定字段
	match(matchObj).
	// 筛选和排除字段
	project({
		content: false
	}). 
	// 跳过多少数据
	skip(pageSize * (page - 1)).
	// 限制每次返回多少条数据
	limit(2).
	end()
  console.log(list)
  //返回数据给客户端
  return {
	  code: 200,
	  msg: '数据请求成功',
	  data: list.data
  }
};
