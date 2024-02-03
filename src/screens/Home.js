import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <div style={{background:" #bbe4e9",height:"750px"}}>
    <div style={{marginBottom:'1em'}}><Navbar/></div>
    <div><Body/></div>
    <div style={{background:"#79c2d0",height:"65px",marginTop:"230px"}}><Footer/></div>
    </div>
    
    
    </>
  )
}
