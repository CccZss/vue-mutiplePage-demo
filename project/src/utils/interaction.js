import axios from 'axios'

export const IP = '/anywork/';
export const myAxios = axios.create({
	baseURL: IP,
	// withCredentials: true
})
