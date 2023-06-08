import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <h1> Want to see a movie? </h1>
      <Link to="/movies/new">
        <Button variant="contained">Now Playing</Button>
      </Link>
    </>
  );
};

export default Landing;
