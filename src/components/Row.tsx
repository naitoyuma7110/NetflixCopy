import { useState, useEffect } from "react";
import axios from "../axios";

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

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
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

	const base_url = "https://image.tmdb.org/t/p/";

	return (
		<div className="Row">
			<h2>{title}</h2>
			<div className="Row-posters">
				{movies.map((movie, i) => (
					<img
						key={movie.id}
						className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
						src={`${base_url}${
							isLargeRow
								? `t/p/w300_and_h450_bestv2/${movie.poster_path}`
								: `t/p/w300_and_h450_bestv2/${movie.backdrop_path}`
						}`}
						alt={movie.name}
					/>
					// <img
					// 	key={movie.id}
					// 	className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
					// 	src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
					// 	alt={movie.name}
					// />
				))}
			</div>
		</div>
	);
};