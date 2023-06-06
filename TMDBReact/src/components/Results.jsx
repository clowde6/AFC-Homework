import MediaCard from "./Card";

const Results = (props) => {
  //   console.log(props.data[0]);
  let displayMovies = props.data.map((el, i) => {
    return <MediaCard data={el} key={i} />;
  });
  return <>{displayMovies}</>;
};

export default Results;
