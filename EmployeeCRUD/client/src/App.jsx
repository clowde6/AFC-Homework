//importing packages and modules
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Table from "./components/Table"
import Landing from "./components/Landing"
import Error from "./components/Error"
import NavBar from "./components/NavBar"
import { ThemeProvider, Typography } from "@mui/material"
import Theme from "./components/ui/Theme"

//importing styling stuff
import './App.css'


function App() {
  return (
  <>
  <ThemeProvider theme={Theme}>
    <Typography 
      variant="h4"
      sx={{color:"primary.main"
          // "&:hover" : {backgroundColor:"yellow"}
    }}
    >
    <h1>Employees R' us</h1>
    </Typography>
  <NavBar/>

  <Router>
    <Link to="/employee/table">All Employees</Link>
    <Link to="/">Landing Page</Link>
    <Link to="/employee">Error Page</Link>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route path="/employee/table" element={<Table/>}/>
      <Route path="/employee" element={<Error/>}/>
    </Routes>
  </Router>
  </ThemeProvider>
  </>
  
)}

export default App
