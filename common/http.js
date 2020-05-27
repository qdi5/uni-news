export default (name, data) => {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name,
			data
		}).then(res => {
			const { result = [] } = res
			if (res.result.code === 200) {
				resolve(res.result)
			} else {
				reject(res.result)
			}
		}).catch(err => {
			reject(err)
		})
	})
}