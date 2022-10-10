import React from "react"
import Header from "../Header"
// import Footer from "../Footer"
import ProdCard from "./ProductsCard";
import ServicesCard from "./ServicesCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true});

function headerScrolled () {
  if(window.innerWidth<=1000) return
  else{
  let selectHeader = document.querySelector("#header")
  if(selectHeader){
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }
  }}
}

function navbarlinksActive(){
  let navbarlinks = document.querySelectorAll('.nav-link')
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = document.querySelector(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
// function handleImageClick() { //just for this demo
// const imgs = document.querySelectorAll('.item img');
// const fullPage = document.querySelector('#fullpage');
// const body = document.querySelector('body');
// imgs.forEach(img => {
//   console.log(img);
//   img.addEventListener('click', function() {
//     fullPage.style.backgroundImage = 'url(' + img.src + ')';
//     // fullPage.setAttribute('src', img.getAttribute('src'))
//     fullPage.style.display = 'block';
//     fullPage.style.overflow = 'auto !important'
//     body.style.overflow = 'hidden'
//   });
// })}

function Home(){

window.addEventListener('load', headerScrolled)
document.addEventListener('scroll', headerScrolled)
window.addEventListener('load', navbarlinksActive)
document.addEventListener('scroll', navbarlinksActive)

return <div>
<Header/>
<section id="home" className="d-flex align-items-center justify-content-center">
<div className="container" data-aos="fade-up">
<div className="row justify-content-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
        <div className="col-xl-8 col-lg-8">
        <img className="companyLogo" src={require("../images/COMPANY_LOGO/logo-removebg.png")} alt="logo"/>
          <h1>Elevators<i className="fa-solid fa-square"></i><br/>Made Simple<i className="fa-solid fa-square"></i></h1>
        </div>
      </div>
      </div>
</section>

<section id="products" className="section-features products">
    <div className="container" data-aos="fade-up">
        <div className="section-title">
          <span>Products</span>
          <p>Check out our Products</p>
        </div>
        
    <div className="masonry">
          <ProdCard 
            title = "Scenic Panoramic Lifts"
            imgLoc ={require("../images/PRODUCTS/SCENIC-PANORAMIC-LIFTS.jpg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Apartment Lifts"
            imgLoc ={require("../images/PRODUCTS/APARTMENT-LIFTS.jpg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Home Lifts"
            imgLoc ={require("../images/PRODUCTS/HOME-BUNGALOW-LIFTS.jpg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Goods Lifts"
            imgLoc ={require("../images/PRODUCTS/GOODS-LIFTS.jpg")}
            animate = "fade-right"
            
          />
          <ProdCard 
            title = "Car Lifts"
            imgLoc ={require("../images/PRODUCTS/CAR-LIFTS.webp")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Cage Hoist Goods Lifts"
            imgLoc ={require("../images/PRODUCTS/CAGE-HOIST-GOODS-LIFTS.jpg")}
            animate = "fade-right"
          />
          
          <ProdCard 
            title = "Chair/Stair Lift"
            imgLoc ={require("../images/PRODUCTS/CHAIR-STAIR-LIFTS.jpg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Dumbwaiter-Service Lifts"
            imgLoc ={require("../images/PRODUCTS/DUMBWAITER-SERVICE-LIFTS.jpg")}
            animate = "fade-right"
          />
          
          
          <ProdCard 
            title = "Platform Lifts"
            imgLoc ={require("../images/PRODUCTS/PLATFORM-LIFTS.jpg")}
            animate = "fade-right"
          />
          
          <ProdCard 
            title = "Scissor Lifts"
            imgLoc ={require("../images/PRODUCTS/SCISSOR-LIFTS.jpg")}
            animate = "fade-right"
          />
          <ProdCard 
            title = "SPLU Lifts"
            imgLoc ={require("../images/PRODUCTS/SPLU-LIFTS.jpg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Stretcher Lifts"
            imgLoc ={require("../images/PRODUCTS/STRETCHER-LIFTS.jpg")}
            animate = "fade-right"
          />
    </div>
</div>
</section>
<section id="services" className="section-features services dark">
    <div className="container" data-aos="fade-up">
        <div className="section-title">
          <span>Services</span>
          <p>Services we offer</p>
        </div>

		<ServicesCard
      title = "Elevator Solutions"
      content = "At Core Elevators, our mission is to improve the flow of urban life. As a global leader in the elevator and escalator industry, Core Elevators provides elevators, escalators and automatic building doors, as well as solutions for maintenance and modernization to add value to buildings throughout their life cycle."
      imgLoc ={require("../images/OUR_SERVICES/ELEVATOR SOLUTIONS/1.jpg")}
      animate = "fade-left"
    />
    <ServicesCard
      title = "Maintenance & Repairs"
      content = "Whatever brand or type of equipment you have, with Core Elevators you can count on maintenance expertise that will keep it running smoothly and safely for its entire lifespan – and a customer experience that is second to none."
      imgLoc ={require("../images/OUR_SERVICES/MAINTENANCE/1.jpg")}
      animate = "fade-right"
    />
    <ServicesCard
      title = "Modernisation & Upgradation"
      content = "Core Elevators modernization solutions are tailored to your exact needs, ranging from component upgrades to full replacement of existing equipment, as well as retrofit installations. Their purpose is simple – to keep your equipment running safely and reliably for the lifetime of your building."
      imgLoc ={require("../images/OUR_SERVICES/MODERNISATION/lobby.jpg")}
      animate = "fade-left"
    />
    </div>
    </section>
</div>
}

export default Home