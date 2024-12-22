import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx"
import ItemContainer from './components/ItemContainer/ItemContainer.jsx'
import PanelAdmin from './components/PanelAdmin/PanelAdmin.jsx'
import Login from './components/Login/Login.jsx'
import Footer from "./components/Footer/Footer.jsx"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<ItemContainer title={"Menu"}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/paneladmin' element={<PanelAdmin />} />
          </Routes>
          <Footer />
        </UserProvider>
      </Router>
    </>
  )
}

export default App
