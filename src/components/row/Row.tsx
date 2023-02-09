import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import "./Row.scss";
const base_url = "https://image.tmdb.org/3/";

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

//trailer option
type Options = {
	height: string;
	width: string;
	playerVars: {
		autoplay: 0 | 1 | undefined;
	};
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
	const [movies, setMovies] = useState<Movie[]>([]);

	const [trailerUrl, setTrailerUrl] = useState<string | null>("");

	// When DOM render And fetchUrl updated
	useEffect(() => {
		// function fetchDateを定義
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const opts: Options = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = async (movie: Movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		}
		try {
			await axios
				.get(
					`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=` +
						import.meta.env.VITE_MVDB_API_KEY
				)
				.then((res) => {
					if (!("success" in res.data.results)) {
						setTrailerUrl(res.data.results[0].key);
					}
				});
			console.log(trailerUrl);
		} catch (e) {
			console.log(e + "axios-err");
		}
	};

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
								? `t/p/w92/${movie.poster_path}`
								: `t/p/w45/${movie.backdrop_path}`
						}`}
						alt={movie.name}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};
