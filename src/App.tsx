import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './components/Layout'
import AboutUs from './pages/aboutus'
import Home from './pages/home'
import Mission from './pages/mission'

function App() {


  return (
    <>
    
          <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
      
      </Routes>
    </Layout>
        </>
  )
}

export default App
