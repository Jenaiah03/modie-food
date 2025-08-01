
import HeroSection from './Components/WelcomeComp/HeroSection/HeroSection'
import Amazing from './Components/WelcomeComp/Amazing/Amazing'
import Serve from './Components/WelcomeComp/Serve/Serve'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome'
import Recipe from './pages/Recipe/Recipe'
import Lifestyle from './pages/Lifestyle/Lifestyle'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/recipes" element={<Recipe/>}/>
        <Route path="/lifestyle" element={<Lifestyle/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
