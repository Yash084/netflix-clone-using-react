// import React, { useEffect, useState } from 'react';
// import "./Home.scss"
// import Row from "./Row";
// import "./Home.scss";
// import axios from 'axios';


// const apikey = "a1423ce3f46bd7ddf61941a4b0ba9080";
// const url = "https://api.themoviedb.org/3/movie";


// const upComing = "upcoming";
// const nowplaying = "now_playing";
// const Popular = "popular";
// const toprated = "top_rated";
// const latest = "latest";



// const Home = () => {


//   const [upComingMovies, setupComingMovies] = useState([]);
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [topRatedMovies, setTopRatedMovies] = useState([]);
//   const [latestMovies, setLatestMovies] = useState([]);

//   useEffect(() => {

//     const fetchUpComing = async () => {
//       const { data } = await axios.get(`${url}/${upComing}?api_key=${apikey}`);
//       setupComingMovies(data.results);
//       console.log(upComingMovies);
//     };


//     const fetchNowPlaying = async () => {
//       const { data } = await axios.get(`${url}/${nowplaying}?api_key=${apikey}`);
//       setNowPlayingMovies(data.results);
//     };


//     const fetchpopular = async () => {
//       const { data } = await axios.get(`${url}/${Popular}?api_key=${apikey}`);
//       setPopularMovies(data.results);
//       console.log(upComingMovies);
//     };

//     const fetchTopRated = async () => {
//       const { data } = await axios.get(`${url}/${toprated}?api_key=${apikey}`);
//       setTopRatedMovies(data.results);
//       console.log(upComingMovies);
//     };

//     const fetchLatest = async () => {
//       const { data } = await axios.get(`${url}/${latest}?api_key=${apikey}`);
//       setLatestMovies(data.results);
//       console.log(upComingMovies);
//     };



//     fetchUpComing();
//     fetchNowPlaying();
//     fetchpopular();
//     fetchTopRated();
//     fetchLatest();

//   })


//   return (
//     <section className='home'>
//       <div className="banner">
//       </div>
//       <div className="row">
//         <Row title={"Now Playing"} arr={nowPlayingMovies} ></Row>
//         <Row title={"Popular"} arr={popularMovies} ></Row>
//         <Row title={"Upcoming"} arr={upComingMovies} ></Row>
//         <Row title={"Top Rated"} arr={topRatedMovies} ></Row>
//         <Row title={"Latest"} arr={latestMovies} ></Row>
//       </div>
//     </section>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react';
import "./Home.scss"
import Row from "./Row";
import "./Home.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apikey = "a1423ce3f46bd7ddf61941a4b0ba9080";
const url = "https://api.themoviedb.org/3/movie";
const genreUrl = "https://api.themoviedb.org/3"
const imgurl = "https://image.tmdb.org/t/p/original"

const upComing = "upcoming";
const nowplaying = "now_playing";
const Popular = "popular";
const toprated = "top_rated";

const Home = () => {
  const [upComingMovies, setupComingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  // const [upComingPage, setUpComingPage] = useState(1);


  useEffect(() => {
    const fetchUpComing = async (page) => {
      const { data } = await axios.get(`${url}/${upComing}?api_key=${apikey}&page=${page}`);
      setupComingMovies(data.results);
    };

    const fetchNowPlaying = async () => {
      const { data } = await axios.get(`${url}/${nowplaying}?api_key=${apikey}`);
      setNowPlayingMovies(data.results);
    };

    const fetchPopular = async () => {
      const { data } = await axios.get(`${url}/${Popular}?api_key=${apikey}`);
      setPopularMovies(data.results);
    };

    const fetchTopRated = async () => {
      const { data } = await axios.get(`${url}/${toprated}?api_key=${apikey}`);
      setTopRatedMovies(data.results);
    };




    const getAllGenre = async () => {

      // https://api.themoviedb.org/3/genre/movie/list?api_key=a1423ce3f46bd7ddf61941a4b0ba9080&language=en-US
      const {
        data: { genres },
      } = await axios.get(`${genreUrl}/genre/movie/list?api_key=${apikey}&language=en-US`);
      setGenre(genres);
      console.log(genres);
    };

    fetchUpComing();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    getAllGenre();
    // fetchUpComing(upComingPage);

  }, []);

  return (
    <section className='home'>
      <div className="banner"
        style={{
          backgroundImage: popularMovies[1]
            ? `url(${`${imgurl}/${popularMovies[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div>
          <button><AiOutlinePlus style={{color:"black"}}/>My List</button>
          <button> <BiPlay style={{color:"black"}}/>Play</button>
        </div>
      </div>


      <div className="row">
        {/* <button onClick={() => setUpComingPage(upComingPage - 1)}>Previous</button>
        <button onClick={() => setUpComingPage(upComingPage + 1)}>Next</button> */}
        <Row title={"Now Playing"} arr={nowPlayingMovies} ></Row>
        <Row title={"Popular"} arr={popularMovies} ></Row>
        <Row title={"Upcoming"} arr={upComingMovies} ></Row>
        <Row title={"Top Rated"} arr={topRatedMovies} ></Row>
      </div>
      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
