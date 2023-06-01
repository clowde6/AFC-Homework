//importing packages and modules
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Table from "./components/Table"
import Landing from "./components/Landing"
import Error from "./components/Error"
import NavBar from "./components/NavBar"
import Form from "./components/Form"
import { ThemeProvider, Typography } from "@mui/material"
import Theme from "./components/ui/Theme"

//importing styling stuff
import './App.css'


function App() {
  return (
  <>
  <ThemeProvider theme={Theme}>
    <Typography 
      variant="h1"
      sx={{color:"primary.main"
          // "&:hover" : {backgroundColor:"yellow"}
    }}
    >
    Employees R' us
    </Typography>
  <NavBar/>

  <Router>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route path="/employee/table" element={<Table/>}/>
      <Route path="/employee/new" element={<Form/>}/>
      <Route path="/employee/3" element={<Form/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
  </Router>
  </ThemeProvider>
  </>
  
)}

export default App
