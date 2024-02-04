import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Box } from '@chakra-ui/react';
import Home from "../../Steak and Roast Website/src/Components/FirstPageSections/Home/Home"
import AboutUs from "../../Steak and Roast Website/src/Components/About-us/AboutUs"
import Footer from './Components/FirstPageSections/Footer/Footer';
import Menu from './Components/Menu/Menu';
import { useEffect, useState } from 'react';
import LoginGif from './Components/LoginGif';
import ContactUs from './Components/Contact-us/ContactUs';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })
  return (
    <Router>
      {loading ? <LoginGif />:
      <Box 
    zIndex={-500}
    backgroundColor="#FFF9F9" 
    backgroundImage="https://www.transparenttextures.com/patterns/diagonal-striped-brick.png"
    >
      <Navbar />
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/contact" element={<ContactUs />}/>
    </Routes>
    <Footer />
    </Box>}
    
    </Router>
  );
}

export default App;
