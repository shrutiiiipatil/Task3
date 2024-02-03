import React from 'react'






export default function Body() {
  return (
    <>
     <section id="hero" class="d-flex align-items-center" >

<div class="container">
  <div class="row" style={{marginTop:"50px"}}>
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1 style={{ margin: "0 0 10px 0",fontSize:"48px",fontWeight:"700",lineHeight:"56px",color:"#53a8b6"}}>Go green and make the environment clean !!</h1>
      <h2 style={{marginBottom:"50px",fontSize:"24px",color: "#53a8b6"}}>Clean city watch to detect illegal garbage disposal</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a  href="/aboutUs" style={{ fontFamily:"sans-serif",fontWeight:"500",fontSize:"16px",letterSpacing:"1px",display:"inline-block",padding:"10px 28px 11px 28px",borderRadius:"50px",transition:"0.5s",margin:"10px 0 0 0",color:"#fff",background:"#47b2e4",marginRight:"10px",textDecoration:"none"}} class="btn-get-started scrollto">Get Started</a>
        <a href="/upload" style={{ fontFamily:"sans-serif",fontWeight:"500",fontSize:"16px",letterSpacing:"1px",display:"inline-block",padding:"10px 28px 11px 28px",borderRadius:"50px",transition:"0.5s",margin:"10px 0 0 0",color:"#fff",background:"#47b2e4",textDecoration:"none"}} class="glightbox btn-watch-video"><i style={{lineHeight:"0",color:"#fff",fontSize:"32px",transition:"0.3s",marginRight:"8px"}} class="bi bi-play-circle"></i><span>Upload Image</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="https://source.unsplash.com/x8ZStukS2PM" style={{borderRadius:"10px"}} class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
    </>
  )
}
