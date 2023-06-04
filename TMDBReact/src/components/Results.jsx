import Card from "./Card"

const Results = (props) => {


let displayMovies = props.data.map((el,i) => {
    return <Card data= {el} key={i}/>
})
return (
<>
{displayMovies}
</>
)
}

export default Results