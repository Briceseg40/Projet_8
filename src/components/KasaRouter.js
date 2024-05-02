import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Appart from './Appart'
import About from './About';
import Error from './Error';


function KasaRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/location/:id' element={
          <Appart />
        } />
          <Route path='/about' element={
          <About />
        } />
        <Route path='*' element={
          <Error />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}
export default KasaRouter
