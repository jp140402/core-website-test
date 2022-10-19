import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import ProdCard from "./ProductsCard";
import ServicesCard from "./ServicesCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import $ from 'jquery';
AOS.init({once: true});


$(document).on('scroll',function() {
  
  var top_of_element = $('#contact').offset().top;
  var bottom_of_element = $('#contact').offset().top + $('#contact').outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();
  function fadeIn(){
     
    $('.float').fadeIn('slow', function(){
    $('.float').removeClass("fixed");
    })
    $('.whatsapp-api').addClass("closed");
    $('.whatsapp-api').removeClass("open");
  }
  function fadeOut(){
     
    $('.float').fadeOut('slow', function(){
    $('.float').addClass("fixed");
    })
    $('.whatsapp-api').addClass("open");
    $('.whatsapp-api').removeClass("closed");
  }

  ///////////IF DESKTOP//////////////
  if($(window).width()>1000){
    if ((bottom_of_screen > (top_of_element + 500)) && (top_of_screen < bottom_of_element)){
      fadeOut()
    }
    else{
      fadeIn()  
    }
  }
  ///////////IF MOBILE//////////////
  // else{
  //   if ((bottom_of_screen > (top_of_element + 1500)) && (top_of_screen < bottom_of_element)){
  //     $('.whatsapp').fadeOut('2000', function(){
  //       $('.whatsapp').css("opacity", "0");
  //       $('.whatsapp').css("pointer-events", "none");
  //     })
  //     $('.whatsapp-api').fadeIn('2000', function(){
  //       $('.whatsapp-api').css("opacity", "1");
  //     })
  //   }
  //   else{
  //     $('.whatsapp').fadeIn('2000', function(){
  //       $('.whatsapp').css("opacity", "1");
  //       $('.whatsapp').css("pointer-events", "all");
  //     })
  //     $('.whatsapp-api').fadeOut('2000', function(){
        
  //       $('.whatsapp-api').css("opacity", "0");
  //     })
  //   }
  // }
  else{
    if ((bottom_of_screen > (top_of_element + 1500)) && (top_of_screen < bottom_of_element)){
      fadeOut()
    }
    else{
      fadeIn()  
    }
  }
})

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


function checkboxClicked(event){
  //////////////// CSS for checkbox border /////////////
    var source = event.nativeEvent.path[1].id
    document.querySelector("#"+source).style.border = '1px solid'
    document.querySelector("#"+source).style.borderImage = '-webkit-linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'
    document.querySelector("#"+source).style.borderImageSlice = '1'
    var allOptions = document.querySelectorAll('.form-check')
    allOptions.forEach(function(option){
      var optionId = option.id
      if(optionId !== source){
        document.querySelector("#"+optionId).style.border = 'none'
      }
    })

    //////////////// Further Options /////////////
    var value = event.target.value
    
    if(value!==undefined){
      if(value==="New Lifts"){
        $('.all').hide()
        $('.general').show()
      }
      else if(value==="Maintenance & Repairs"){
        $('.all').hide()
        $('.general').show()
        $('.maintenance').show()
      }
      else if(value==="Other"){
        $('.all').hide()
        $('.other').show()
      }
    }
}



function expandProducts(e){
  e.preventDefault();
  var element = document.querySelector('.masonry')
  var curHeight = getComputedStyle(element).height
  
  if (curHeight==='2350px'){
    $('.masonry').css({
      height: "7600px",
      marginBottom: "0px"
    });
    $('.expand-icon h6')[0].innerText = 'View Less'
    $('.bxs-chevrons-down').css({
      transform: 'rotate(-180deg)',
      animation : 'none'
    });
  }
  else{
    $('.masonry').css({
      height: "2350px",
      marginBottom: "-350px"
    });
      window.scrollTo({
        top: document.querySelector('#products').offsetTop,
        behavior: 'smooth'
      })
      $('.expand-icon h6')[0].innerText = 'View More Products'
      $('.bxs-chevrons-down').css({
        animation : ''
      });
    }
      
}


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
          <h1>Elevators<i className="square ri-stop-mini-fill"></i><br/>Made Simple<i className="square ri-stop-mini-fill"></i></h1>
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
            imgLoc ={require("../images/PRODUCTS/APARTMENT-LIFTS.jpeg")}
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
            imgLoc ={require("../images/PRODUCTS/CHAIR-STAIR-LIFTS.jpeg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Dumbwaiter-Service Lifts"
            imgLoc ={require("../images/PRODUCTS/DUMBWAITER-SERVICE-LIFTS.jpg")}
            animate = "fade-right"
          />
          
          
          <ProdCard 
            title = "Platform Lifts"
            imgLoc ={require("../images/PRODUCTS/PLATFORM-LIFTS.jpeg")}
            animate = "fade-right"
          />
          
          <ProdCard 
            title = "Scissor Lifts"
            imgLoc ={require("../images/PRODUCTS/SCISSOR-LIFTS.jpeg")}
            animate = "fade-right"
          />
          <ProdCard 
            title = "SPLU Lifts"
            imgLoc ={require("../images/PRODUCTS/SPLU-LIFTS.jpeg")}
            animate = "fade-left"
          />
          <ProdCard 
            title = "Stretcher Lifts"
            imgLoc ={require("../images/PRODUCTS/STRETCHER-LIFTS.jpg")}
            animate = "fade-right"
          />
    </div> 
</div>
<div className="container-fluid expand-icon mx-auto" onClick={expandProducts}>
  <h6>View more Products</h6>
    <i className='bx bxs-chevrons-down'></i>
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
      imgLoc ={require("../images/OUR_SERVICES/MODERNISATION/lobby.jpeg")}
      animate = "fade-left"
    />
    </div>
    </section>

    <section id="about" className="section-features about">
    <div className="container" data-aos="fade-up">
        <div className="section-title">
          <span>About Us</span>
          <p>Get to know us</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={require("../images/ABOUT/about.jpg")} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>

      </div>

      <div id="features" className="container" data-aos="fade-up">

        <div className="row">
          <div className="image col-lg-6" data-aos="fade-right"></div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-receipt"></i>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-cube-alt"></i>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-images"></i>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-shield"></i>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
        </div>

      </div>
      </section>

    <section id="contact" className="section-features contact dark">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <span>Contact</span>
          <p>Reach out to Us</p>
        </div>
        <div className="row mt-5 map-and-details">
        <div className="col-lg-4 col-md-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.63994827439!2d75.56996351443664!3d21.00706518601009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f91442a1db3%3A0x79b99e3309fcb795!2sCore%20Elevators!5e0!3m2!1sen!2sin!4v1665475863309!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        
          <div className="col-lg-8 col-md-12">
            <div className="info">
              <div className="address details">
              <i className="ri-map-pin-line"></i>
                <h4>Location:</h4>
                <p>Shop No.1, Dnyanleela Building, Opp. Dr. Dileep Rane Hospital, Behind Shinu Complex, Jalgaon, Maharashtra - 425001.</p>
              </div>

              <div className="email details">
              <i className="ri-mail-line"></i>
                <h4>Email:</h4>
                <p>info@coreelevators.co.in</p>
              </div>

              <div className="phone details">
              <i className="ri-phone-line"></i>
                <h4>Call:</h4>
                <p>+91 75586 99120</p>
              </div>

              <div className="whatsapp-api">
              <a href="https://api.whatsapp.com/send?phone=917558699120&text=" class="whatsapp-button" target="_blank">
              <i class='bx bxl-whatsapp'></i>
              <h5 className="whatsapp-connect">Connect with us on WhatsApp!</h5>
              </a>
              </div>

            </div>

          </div>
          </div>
          

</div>
</section>

<section id="enquiry" className="section-features enquiry">
<div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <span>Enquiry Form</span>
          <p>Submit an enquiry</p>
        </div>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form mx-auto needs-validation">
              <div className="row">
                <div className="col-lg-6 col-md-12 form-group">
                  <input type="text" name="name" className="form-control basic" id="name" placeholder="Your Name" required autoComplete="off"/>
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-tooltip">Please fill out this field.</div>
                </div>
                <div className="col-lg-6 col-md-12 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control basic" name="email" id="email" placeholder="Your Email" required autoComplete="off"/>
                </div>
              </div>
              
                <div className="checkbox-form form-group">
                <h3 className="checkbox-title">Enquiry Type</h3>
                <div class="form-check form-check-inline" id="checkbox-option1" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="New Lifts" required/>
                  <label class="form-check-label" for="inlineRadio1">New Lifts</label>
                  <div class="invalid-tooltip">Please fill out this field.</div>
                </div>
                <div class="form-check form-check-inline" id="checkbox-option2" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Maintenance & Repairs" required/>
                  <label class="form-check-label" for="inlineRadio2">Maintenance & Repairs</label>
                </div>
                <div class="form-check form-check-inline" id="checkbox-option3" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other" required/>
                  <label class="form-check-label" for="inlineRadio3">Other</label>
                  <div class="invalid-feedback">More example invalid feedback text</div>
                </div>
                </div>
              
              {/* NEW-LIFTS & MAINTENANCE GENERAL FIELDS */}
              <div className="general hide all">
                {/* CITY */}
                <div className="form-group mt-3">
                  <input className="form-control basic" id="city" name="city" placeholder="City" required/>
                </div>
                {/* CAPACITY */}
                <div className="form-group mt-3">
                  <input className="form-control basic" id="passengers" name="passengers" placeholder="No. of Passengers (Capacity)" required/>
                </div>
                {/* FLOOR NO. */}
                <div className="form-group mt-3 general">
                  <input className="form-control basic" id="floor-numbers" name="floors" placeholder="Number of Floors (Example: G + 3)" required/>
                </div>
                {/* LIFT TYPE */}
                <div className="checkbox-form">
                <h3 className="checkbox-title">Lift Type</h3>
                <div class="form-check form-check-inline" id="checkbox-optionPassenger" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioPassenger" value="Passenger Lift" required/>
                  <label class="form-check-label" for="inlineRadioPassenger">Passenger</label>
                </div>
                <div class="form-check form-check-inline" id="checkbox-optionHospital" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioHospital" value="Hospital Lift" required/>
                  <label class="form-check-label" for="inlineRadioHospital">Hospital</label>
                </div>
                <div class="form-check form-check-inline" id="checkbox-optionGoods" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioGoods" value="Goods Lift" required/>
                  <label class="form-check-label" for="inlineRadioGoods">Goods</label>
                </div>
                <div class="form-check form-check-inline" id="checkbox-optionOther" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioOther" value="Other Lift" required/>
                  <label class="form-check-label" for="inlineRadioOther">Other</label>
                </div>
                </div>

                {/* DOOR TYPE */}
                <div className="checkbox-form">
                <h3 className="checkbox-title">Door Type</h3>
                <div class="form-check form-check-inline" id="checkbox-optionManual" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioManual" value="Manual Doors" required/>
                  <label class="form-check-label" for="inlineRadioManual">Manual</label>
                </div>
                <div class="form-check form-check-inline" id="checkbox-optionAutomatic" onClick={checkboxClicked}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioAutomatic" value="Automatic Doors" required/>
                  <label class="form-check-label" for="inlineRadioAutomatic">Automatic</label>
                </div>
                </div>
              </div>
              {/* NEW-LIFTS ONLY FIELDS */}
              <div className="new-lifts hide all">
                <div className="form-group mt-3">
                  <input className="form-control basic" id="address" name="address" placeholder="Address" required/>
                </div>
              </div>
              {/* MAINTENANCE ONLY FIELDS */}
              <div className="maintenance hide all">
                <div className="form-group mt-3">
                  <input className="form-control basic" id="brand" name="brand" placeholder="Lift Brand" required/>
                </div>
              </div>
              {/* OTHER ONLY FIELDS */}
              <div className="other hide all">
                <div className="form-group mt-3">
                  <textarea className="form-control" id="message" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Submit</button></div>
            </form>

            </div>
</section>
<Footer/>
</div>
}

export default Home