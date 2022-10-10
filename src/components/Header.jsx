import React from "react"


function Header(){
    function handleClick(event){
      event.preventDefault()
      
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
      document.querySelector('#header').classList.toggle('header-scrolled')
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
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-link active" onClick={headerBg} aria-current="page" href="#home" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-link" onClick={headerBg} href="#products" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Products</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-link" onClick={headerBg} href="#services" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Services</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-link" onClick={headerBg} href="#about" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a className="nav-link" onClick={headerBg} href="#contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</a>
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