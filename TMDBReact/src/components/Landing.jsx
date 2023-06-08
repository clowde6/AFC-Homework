// ////////////////////////////////////////////////////////////// //
// This component represents the landing page of the application. //
// ////////////////////////////////////////////////////////////// //

// Functional Imports
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <h1> Want to see a movie? </h1>
      {/* Create a Link component to navigate to the "/movies/new" route. */}
      <Link to="/movies/new">
        {/* Render a Button component with the label "Now Playing". */}
        <Button variant="contained">Now Playing</Button>
      </Link>
    </>
  );
};

export default Landing;
