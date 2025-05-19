import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Gallery from './Gallery';
import NavBar from './NavBar';
import Hero from './Hero';
import Service from './Service';
import Lowerk from './Lowerk';
import Projectc3 from './Projectc3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Footer from './Footer';
import Work from './Work';
function App() {
  return (
    <>
      <NavBar />
    <Hero />
    <Service/>
      <Work />
    <Lowerk/>
    <Projectc3/>
    <Project4/>
    <Project5/>
    <Project6/>
    <Footer/>
  
    </>
  );
}

export default App;