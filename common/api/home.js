import $http from '../http.js'
const get_label = data => {
	return $http('get_label', data)
}

const get_list = data => {
	debugger
	return $http('get_list', data)
}

export default {
	get_label,
	get_list
}