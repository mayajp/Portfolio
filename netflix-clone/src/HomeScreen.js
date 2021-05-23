import React from 'react';
import NavBar from './NavBar.js'
// import Row from './Row'
// import requests from './AxiosRequest';
function HomeScreen(props) {
    return (
        <div className="homeScreen">
            <NavBar/>
          
            {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.getallMovies} isLargeRow />
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>  */}
            
        </div>
    );
}

export default HomeScreen;