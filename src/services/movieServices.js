const key = import.meta.env.VITE_TMDB_KEY;

const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}&language=en-US`,
    trending: `${baseUrl}/trending/all/day?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}&language=en-US`,
    comedy: `${baseUrl}/discover/movie?api_key=${key}&with_genres=35`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}&language=en-US`,
    nowPlaying: `${baseUrl}/movie/now_playing?api_key=${key}&language=en-US`,
};

export function createImageUrl(filename, size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}

export default endpoints;

