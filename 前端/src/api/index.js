import axios from "axios";

// export const baseURL = "http://zhangmingyang.love:8080";
export const baseURL = "http://localhost:5173";

const api = axios.create({
	baseURL: `${baseURL}/api`,
	timeout: 5000,
});


//初始化请求数据
export const get = url =>
	api({
		url,
		method: "get",
	});

//添加数据
export const post = (url, data) =>
	api({
		url,
		method: "post",
		data,
	});

//删除数据
export const del = url => {
	api({
		url,
		method: "delete",
	});
};

//替换数据
export const put = (url, data) =>
	api({
		url,
		method: "put",
		data,
	});

