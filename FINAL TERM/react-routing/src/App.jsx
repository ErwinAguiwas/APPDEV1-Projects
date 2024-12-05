import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Game from './components/Game'
import {Link, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <h1>This is my React Page</h1>
      <nav>
        <ul>
          
          <li><Link to = "/">Home</Link>
          </li>
          <li><Link to = "/about">About</Link>
          </li>
          <li><Link to = "/games">Games</Link>
          </li>

        </ul>
      </nav>

      {/* Routes for the appication */}
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/games">
            <Route index element = {<Games />} />
            <Route path = ":gameid" element = {<Game />} />
          </Route>
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
    </>
  )
}

export default App