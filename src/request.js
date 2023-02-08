const API_KEY = import.meta.env.VITE_APIKEY;

const requests = {
	feachNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
	feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
	feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
	feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
	feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
	feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
	feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
