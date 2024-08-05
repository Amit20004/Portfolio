import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  
  return (
    <>
   <Head  />
   <Navbar/>
   <About/>
   <Projects/>
   <Contact/>
   </>
  )
}

export default App;
