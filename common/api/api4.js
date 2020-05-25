import $http from './http.js'
const get_label4 = data => {
	return $http('get_label', data)
}

const get_list4 = data => {
	return $http('get_list', data)
}

export default {
	get_label4,
	get_list4
}