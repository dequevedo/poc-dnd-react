import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Routes
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import CharacterInfo from "./components/pages/CharacterInfo";
import Items from "./components/pages/Items";
import Contact from "./components/pages/Contact";

import Inventory from "./components/dnd/Inventory";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <HashRouter>
        <div className="App">
          <ul className="header">
            <li><NavLink to="/">Info</NavLink></li>
            <li><NavLink to="/stuff">Items</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<CharacterInfo />}></Route>
              <Route exact path="/stuff" element={<Items />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </>
  )
}

export default App
