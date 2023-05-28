import MediaCard from "./components/MediaCard";
import { useEffect, useState } from "react";
import axios from "axios"


const  App = () => {
  const {VITE_TMDB_API_KEY} = process.env
  const movieArray = [
    {
    title: "Test movie",
    image_path: "",
    overview: "This is my most awesome movie stuff",
    id: 666
    }
  ]
  
  //inital state of movies is fakedata moviearray data
  const[movies, setMovies] = useState(movieArray)

  useEffect(() => {
    let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${VITE_TMDB_API_KEY}`
    axios.get(endpoint)
    .then(response => {
      // console.log(response)
      setMovies(response.data.results)
    })
    .catch(err => console.log(`Error with axios, ${err}`))
  }, []);

    let displayMovies = movies.map((el, i) => {
      return <MediaCard data={el} key={i}/>
    })

  return (
    <>
    <h1>Home Page</h1>
    {/* <MediaCard/> */}
    <div id="movie_container">{displayMovies}</div>
    </>
  );
};

export default App;
