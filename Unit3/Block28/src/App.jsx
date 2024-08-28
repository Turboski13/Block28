import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Components/Blue.jsx'
import Red from './Components/Red.jsx'
import Home from './Components/Home.jsx'

function App() {
  
  return (
    <>
      <div id="container">
      <div id="navbar"> 
      <Link to="/Home">Home</Link>
      <Link to="/Red">Red</Link>
      <Link to="/Blue">Blue</Link>
      </div>
      <div id="main-section">
  <Routes>
      <Route path="/Home" element={<Home />} />   
      <Route path="/Blue" element={<Blue />} />
      <Route path="/Red" element={<Red />} />   
  </Routes>
</div>
    </div>
    </>
  )
}

export default App
