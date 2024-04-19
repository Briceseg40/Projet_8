import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Banner from './Banner'
import SectionF from './SectionF'
import Footer from './Footer'
import Appart from './Appart'
import jsonData from '../logements.json';


function KasaRouter() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/location/:id' element={
          <Appart />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}
export default KasaRouter
