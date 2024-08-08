import React from 'react'
import Header from '../HomeComponent/Header/Header'
import Footer from '../HomeComponent/Footer/Footer'
import FooterBottom from '../HomeComponent/FooterBottom/FooterBottom'
import { Outlet } from 'react-router-dom'

const RootElement = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  )
}

export default RootElement
