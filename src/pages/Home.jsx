import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Food from '../components/Food'
import Cart from '../components/Cart'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>

        <Navbar/>
        <Menu/>
        <Food/>
        <Cart/>
        <Footer/>
    </>
  )
}

export default Home