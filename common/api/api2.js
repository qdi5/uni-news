import $http from './http.js'
const get_label = data => {
	return $http('get_label', data)
}

const get_list = data => {
	return $http('get_list', data)
}

export const a = {
	get_label,
	get_list
}