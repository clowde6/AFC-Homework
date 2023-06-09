// Functional imports
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Components imports
import Results from "./components/Results";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Error from "./components/Error";

// Styling imports
import "./App.css";

/* Main component representing the application.*/
const App = () => {
  const { VITE_TMDB_API_KEY } = process.env;
  const movieArray = [];

  // Initial state of movies is fake data movieArray data
  const [movies, setMovies] = useState(movieArray);

  useEffect(() => {
    // Fetch movie data from the API
    let endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${VITE_TMDB_API_KEY}`;
    axios
      .get(endpoint)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => console.log(`Error with axios, ${err}`));
  }, []);

  return (
    <>
      <Router>
        {/* Routes for different components */}
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Layout setMovies={setMovies} />}>
            {/* Nested routes */}
            <Route index element={<Landing />} />
            <Route path="movies/new" element={<Results data={movies} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
