import React from "react"
import $ from 'jquery';

function Header(){
    function handleClick(event){
      event.preventDefault()
      document.querySelectorAll('.nav-link').forEach(function(link){
        if(link.classList.contains("active")){
          link.style ="none"
        }})
        var header = document.querySelector("#header")
        var offset = header.offsetHeight
        var elementPos = document.querySelector(event.target.hash).offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
        if(window.innerWidth<=1000){
          window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
          })
        }
      
    }
    function headerBg(){
      // if($('#header').hasClass('header-scrolled')){

      // }
      // else{}
      document.querySelector('#header').classList.toggle('header-scrolled')
    }

    function handleMouseOver(event){
    var eventHref = event.target.hash
    if(eventHref!==""){
    if($("a[href='"+eventHref+"']").hasClass("active")){
    // if hovered over currently active link, do nothing
    }
    else{
      // if hovered over any other link, remove background of currently active link
      document.querySelector(".active").style.backgroundImage = "none"

      // scroll to hovered link
      var header = document.querySelector("#header")
        // var offset = header.offsetHeight
        // var elementPos = document.querySelector(event.target.hash).offsetTop
        // window.scrollTo({
        //   top: elementPos - offset,
        //   behavior: 'smooth'
        // })
        // if(window.innerWidth<=1000){
        //   window.scrollTo({
        //     top: elementPos,
        //     behavior: 'smooth'
        //   })
        // }    
  }
  }}
    
    function handleMouseOut(event){
      var eventHref = event.target.hash
    if(eventHref!==""){
    if($("a[href='"+eventHref+"']").hasClass("active")){
    // if hovered over currently active link, do nothing
    }
    else{
    // if hovered out of any other link, change back background of currently active link to normal
      document.querySelector(".active").style = "none"}
    }
  else{
    document.querySelector(".active").style.backgroundImage = "none"}
  }


    return <header id="header" className="fixed-top">
    <section id="nav" className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-none">
    {/* <div className="container-fluid"> */}
    {/* <a class="navbar-brand" href="#"></a> */}
    <button onClick={headerBg} class="navbar-toggler collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
            <span> </span>
            <span> </span>
            <span> </span>
    </button>
  <div class="navbar-collapse collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mx-auto">
          <li id="home-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link active" onClick={headerBg} aria-current="page" href="#home" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
          </li>
          <li id="products-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#products" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Products</a>
          </li>
          <li id="services-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#services" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Services</a>
          </li>
          <li id="gallery-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#gallery" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</a>
          </li>
          <li id="about-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#about" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</a>
          </li>
          <li id="contact-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</a>
          </li>
          <li id="enquiry-link" className="nav-item" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="nav-link" onClick={headerBg} href="#enquiry" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Enquiry</a>
          </li>
          {/* <li className="nav-item" onClick={handleClick}>
            <a className="free-inspection-btn" href="#about">Free Inspection</a>
          </li> */}
        </ul>
        
      </div>
    {/* </div> */}
    
  </nav>
  </section>
  </header>
}

export default Header