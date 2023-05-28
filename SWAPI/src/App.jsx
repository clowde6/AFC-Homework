import { useEffect, useState } from "react";
import axios from "axios";
import Table from './componenets/Table';

const endpoint = "https://swapi.dev/api/people";

const App = () => {
    // Initalizing state of two variables
    // dataSWAPI is initalized as an enpty array and will be used to store SWAPI data
    const [SWAPIdata, setSWAPIdata] = useState([]);
    //displayData is initalized and set to false to control IF data should be displayed
    const [dataDisplay, setDataDisplay] = useState(false);

    // Function for the submit button
    // Turns on setDisplayData
    const handleSubmitClick = () => {
        setDataDisplay(true);
    }

    // Function for the reset button
    // Resets setDispalyData
    const handleResetClick = () => {
        setDatadisplay(false);
    }

    // Fetches data from SWAPI
    useEffect(() => {
        // GET from endpoint swapi.dev/api/people
        axios.get(endpoint)
            // Chained to the promise response to pass the results
            .then(response => {
                // Extracts results from the response then updates setDataSWAPI
                setSWAPIdata(response.data.results);
            })
            // Throws are error if there is problem fetching data
            .catch(err => {
                console.log("Problem fetching data from SWAPI endpoint", err);
            })
       // [] useEffect ensures there isn't an infinite loop     
    }, [])

    return (
        // Usess a fragment instead of a <div> tag
        <>
            {/*sets the SWAPIhead h1 tag*/}
            <h1 id={"SWAPIHead"}>SWAPI</h1>

            {/* Sets the SWAPIButton-submit and -reset*/}
            <button id={"SWAPIButton-submit"} onClick={handleSubmitClick}>Submit</button>
            <button id={"SWAPIButton-reset"} onClick={handleResetClick}>Reset</button>

            {/* Draws the table and populates it with data if displayData is true */}
            {dataDisplay ? <Table data={SWAPIdata} /> : <></>}
        </>
    )
}


export default App