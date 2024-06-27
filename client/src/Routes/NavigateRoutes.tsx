import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'
import { Container } from '@mui/material'

const NavigateRoutes = () => {
  return (
      <>
        <Header/>
            <Container maxWidth='xl' sx={{pb:'100px'}}>
                <Outlet/>
            </Container>
        <Footer/>
      </>
  )
}

export default NavigateRoutes