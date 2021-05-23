const API_KEY = "ac8b29833a8fdfffb3cd65c3624079a4";
const requests = {
    
    getallMovies:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`

}
export default  requests;

//  https//api.themoviedb.org/3/movie/550?api_key=${API_KEY}