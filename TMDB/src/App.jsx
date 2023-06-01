//Imports
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Components
import Card from './components/Card'
import NavBar from './components/NavBar'
import Results from './components/Results'
import Error from './components/Error'
import Theme from './components/Theme'

//Styling
import './App.css'

function App() {

  return (
    <>
      <h1>This is the App</h1>
      <NavBar>NavBar</NavBar>
      <Results>Results</Results>
      <Card>Card</Card>
      <Error>Error</Error>
      <Theme>Theme</Theme>
    </>
  )
}

export default App
