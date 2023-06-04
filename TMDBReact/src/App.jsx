// Functional imports
require("dotenv").config();
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { ThemeProvider, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import axios from 'axios'


// Components imports
import Error from "./components/Error"
import Results from "./components/Results"
import Layout from "./components/Layout"

// Styling imports
import "./App.css"
import Themes from "./components/ui/Themes";

const  App = () => {

  const {VITE_TMDB_API_KEY} = process.env
  const movieArray = [
    {
    title: "Test Movie",
    imagePath: "",
    overview: "A test movie with nothing interesting about it"
  },
];

// Initial state of movies is fake data movieArray data
const[movies, setMovies] = useState(movieArray)
  
useEffect(() => {
  let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${VITE_TMDB_API_KEY}`
  axios
  .get(endpoint)
  .then(response => {
    console.log(response.data.results);
    setMovies(response.data.results)
  })
  .catch(err => console.log(`Error with axios, ${err}`))
}, [])

return (
  <>
  <ThemeProvider theme={customTheme}>
      {/* Your app content here */}
    
  <Typography variant='h2' sx={
    {
      color:"orangered"
      }
      }
      >
  </Typography>
  </ThemeProvider>
<Router>
  <Routes>
    <Route path = "/" element = {<Layout setMovies={setMovies}/>}>
    <Route index element={<Landing/>}/>
    <Route path= "movies/new" element = {<Results data={movies}/>}/>
    <Route path="*" element={<Error/>}/>
    </Route>
  </Routes>
</Router>
  </>
)
}


export default App;

