import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
	title: string;
	fetchUrl: string;
	isLargeRow?: boolean;
};

type Movie = {
	id: string;
	name: string;
	title: string;
	original_name: string;
	poster_path: string;
	backdrop_path: string;
};

export const Row = ({ title, fetchUrl }: Props) => {
	const [movies, setMovies] = useState<Movie[]>([]);

	// when DOM render
	useEffect(() => {
		// fetchDataの定義
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		// 実行
		fetchData();
		// useEffect第二引数:指定した値の変更を検知しfetch実行
	}, [fetchUrl]);

	console.log(movies);

	return <div className="Row" />;
};
