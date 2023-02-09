import axios from "axios";

//TMDBからのbaseURLリクエストを作成
const instance = axios.create({
	baseURL: "/",
});

export default instance;
