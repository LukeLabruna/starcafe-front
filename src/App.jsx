import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
