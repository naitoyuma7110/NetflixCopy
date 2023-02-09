const MVDB_API_KEY = import.meta.env.VITE_MVDB_API_KEY;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const MVDB_baseURL = "https://api.themoviedb.org/3";

const YOUTUBE_baseURL = "https://www.googleapis.com/youtube/v3";

const requests = {
	feachNowplaying:
		MVDB_baseURL +
		`/movie/now_playing?api_key=${MVDB_API_KEY}&language=en-US&page=1`,
	feachTrending:
		MVDB_baseURL + `/trending/all/week?api_key=${MVDB_API_KEY}&language=en-us`,
	feachNetflixOriginals:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_networks=213`,
	feactTopRated:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&languager=en-us`,
	feactActionMovies:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_genres=28`,
	feactComedyMovies:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_genres=35`,
	feactHorrorMovies:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_genres=27`,
	feactRomanceMovies:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_genres=10749`,
	feactDocumentMovies:
		MVDB_baseURL + `/discover/tv?api_key=${MVDB_API_KEY}&with_genres=99`,

	fetchYoutubeMoviesSearch:
		YOUTUBE_baseURL + `/search?key=${YOUTUBE_API_KEY}&q=`,
};

export default requests;
