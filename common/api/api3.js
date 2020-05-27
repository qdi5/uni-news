import $http from '../http.js'
const get_label3 = data => {
	return $http('get_label', data)
}

const get_list3 = data => {
	return $http('get_list', data)
}

export default {
	get_label3,
	get_list3
}