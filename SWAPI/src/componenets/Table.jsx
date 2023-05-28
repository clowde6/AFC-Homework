import HeaderRow from "./HeaderRow.jsx";
import Row from "./Row.jsx";

const Table = (props) => {
    const {data} = props;

    return (
        <>
            <table id={"sw-people"}>
                <thead>
                    <HeaderRow />
                </thead>

                <tbody>
                    { data.map((el, i) => {
                        return ( <Row data={el} key={i} /> )
                    }) }
                </tbody>
            </table>
        </>
    )
}

export default Table;