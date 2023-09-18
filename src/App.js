import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from './components/Contact';


function App(){
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App