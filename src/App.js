import React, { Component } from 'react'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Header from './Component/header/Header'
import Navbar from './Component/Navbar/Navbar'
import News from './Component/News/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './Component/About/About'
import { Gallery } from './Component/Gallery/Gallery'
import { Sports } from './Component/Sports/Sports'
import { Politics } from './Component/Politics/Politics'
import Game from './Component/Game/Game'
import { UsersData } from './Component/Datafetch/Datafetch'




export class App extends Component {
  
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Navbar id="navbar"/>
        
          <Routes>
            <Route exact path="/" element={<News />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/sports" element={<Sports />} />         
            <Route exact path="/politics" element={<Politics />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/test" element={<Game/>} />
            <Route exact path="/again" element={<UsersData/>} />
          </Routes>


          <Footer />
        </BrowserRouter>
      </>
    )
  }
}

export default App