// **************************************************************
// OG Form I suppose
// **************************************************************

import { useState } from "react"

const App = () => {
  const [data, setData] = useState({})
  
    const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
    // console.log(data)
  }
  const handleSubmit = () => {
    event.preventDefault()
    //Do something NOW
    console.log(data)
  }
  return (
  <>
  <h1> Form Demos</h1>
<form onSubmit={handleSubmit}>
  <label htmlFor="fuzzy">First Name:</label>
  <input minLength="2" maxLength="5" id="fuzzy" type="text" name="fname" onChange={handleChange} value={data.fname} required/>
  <label htmlFor="wuzzy">Last Name:</label>
  <input minLength="2" maxLength="5" id="wuzzy" type="text" name="lname" onChange={handleChange} value={data.lname} required/>
  <label htmlFor="age"> Age:</label>
  <input min="1" max="5" id="age" type="number" name="age" onChange={handleChange} value={data.age} required/>
  <button type="submit">Submit</button>
</form>

  </>
  )}

export default App

