import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import InstrumentSearch from './pages/InstrumentSearch/InstrumentSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <InstrumentSearch />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
