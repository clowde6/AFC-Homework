// ////////////////////////////////////////////////////////////////////// //
// This component is responsible for rendering the results of the movies. //
// ////////////////////////////////////////////////////////////////////// //

// Importing the MediaCard component to display individual movie cards.
import MediaCard from "./Card";

const Results = (props) => {
  let displayMovies = props.data.map((el, i) => {
    return <MediaCard data={el} key={i} />; // Creating a MediaCard component for each movie in the data array
  });
  return <>{displayMovies}</>; // Render the array of MediaCard components.
};

export default Results;
