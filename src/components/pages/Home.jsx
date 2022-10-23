import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import ProdCard from "./ProductsCard";
import ServicesCard from "./ServicesCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

AOS.init({ once: true });

$(document).on('scroll', function () {

  var top_of_element = $('#contact').offset().top;
  var bottom_of_element = $('#contact').offset().top + $('#contact').outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();
  function fadeIn() {

    $('.float').fadeIn('slow', function () {
      $('.float').removeClass("fixed");
    })
    $('.whatsapp-api').addClass("closed");
    $('.whatsapp-api').removeClass("open");
  }
  function fadeOut() {

    $('.float').fadeOut('slow', function () {
      $('.float').addClass("fixed");
    })
    $('.whatsapp-api').addClass("open");
    $('.whatsapp-api').removeClass("closed");
  }

  ///////////IF DESKTOP//////////////
  if ($(window).width() > 1000) {
    if ((bottom_of_screen > (top_of_element + 500)) && (top_of_screen < bottom_of_element)) {
      fadeOut()
    }
    else {
      fadeIn()
    }
  }
  ///////////IF MOBILE//////////////

  else {
    if ((bottom_of_screen > (top_of_element + 1500)) && (top_of_screen < bottom_of_element)) {
      fadeOut()
    }
    else {
      fadeIn()
    }
  }
})


function headerScrolled() {
  if (window.innerWidth <= 1000) return
  else {
    let selectHeader = document.querySelector("#header")
    if (selectHeader) {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
  }
}

function navbarlinksActive() {
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


function checkboxClicked(event) {
  //////////////// CSS for checkbox border /////////////
  var source = event.nativeEvent.path[1].id
  document.querySelector("#" + source).style.border = '1px solid'
  document.querySelector("#" + source).style.borderImage = '-webkit-linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'
  document.querySelector("#" + source).style.borderImageSlice = '1'
  var allOptions = document.querySelectorAll('.form-check')
  allOptions.forEach(function (option) {
    var optionId = option.id
    if (optionId !== source) {
      document.querySelector("#" + optionId).style.border = 'none'
    }
  })

  //////////////// Further Options /////////////
  var types = ['New Lifts', 'Maintenance & Repairs', 'Other']
  var value = event.target.value
  if (value !== undefined && types.includes(value)) {
    $('.all').hide()
    $('.all input, textarea').each(function (index, inputField) {
      if (inputField.hasAttribute('disabled')) { }
      else {
        inputField.toggleAttribute('disabled')
      }
    })

    if (value === "New Lifts") {
      $('.general').slideDown('slow')
      $('.general input').each(function (index, inputField) {
        inputField.toggleAttribute('disabled')
      })
    }
    else if (value === "Maintenance & Repairs") {

      $('.general').slideDown('slow')
      $('.general input').each(function (index, inputField) {
        inputField.toggleAttribute('disabled')
      })

      $('.maintenance').slideDown('slow')
      $('.maintenance input')[0].toggleAttribute('disabled')
    }
    else if (value === "Other") {

      $('.other').slideDown('slow')
      $('.other textarea')[0].toggleAttribute('disabled')
    }
  }
}



function expandProducts(e) {
  e.preventDefault();
  var element = document.querySelector('.masonry')
  var curHeight = getComputedStyle(element).height

  if (curHeight === '2350px') {
    $('.masonry').css({
      height: "7600px",
      marginBottom: "0px"
    });
    $('.expand-icon h6')[0].innerText = 'View Less'
    $('.bxs-chevrons-down').css({
      transform: 'rotate(-180deg)',
      animation: 'none'
    });
  }
  else {
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
      animation: ''
    });
  }

}

function handleSubmit(e) {
  e.preventDefault();

  $(".loader-holder").css("display", 'block')

  var frm = $(".php-email-form")

  $.ajax({
    type: frm.attr('method'),
    method: "POST",
    url: "https://formsubmit.co/junaidpinjari2002@gmail.com",
    dataType: 'html',
    accepts: 'application/json',
    data: frm.serialize(),
    success: function (r) { $('.alert-success').slideDown('slow') },
    error: function (r) { $('.alert-danger').slideDown('slow') }
  });
  e.target.reset()
  return false; // here a change
};


function Home() {

  window.addEventListener('load', headerScrolled)
  document.addEventListener('scroll', headerScrolled)
  window.addEventListener('load', navbarlinksActive)
  document.addEventListener('scroll', navbarlinksActive)

  return <div>
    <Header />
    <section id="home" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
          <div className="col-xl-8 col-lg-8">
            <img className="companyLogo" src={require("../images/COMPANY_LOGO/logo-removebg.png")} alt="logo" />
            <h1>Elevators<i className="square ri-stop-mini-fill"></i><br />Made Simple<i className="square ri-stop-mini-fill"></i></h1>
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
            title="Scenic Panoramic Lifts"
            imgLoc={require("../images/PRODUCTS/SCENIC-PANORAMIC-LIFTS.jpg")}
            animate="fade-left"
          />
          <ProdCard
            title="Apartment Lifts"
            imgLoc={require("../images/PRODUCTS/APARTMENT-LIFTS.jpeg")}
            animate="fade-left"
          />
          <ProdCard
            title="Home Lifts"
            imgLoc={require("../images/PRODUCTS/HOME-BUNGALOW-LIFTS.jpg")}
            animate="fade-left"
          />
          <ProdCard
            title="Goods Lifts"
            imgLoc={require("../images/PRODUCTS/GOODS-LIFTS.jpg")}
            animate="fade-right"

          />
          <ProdCard
            title="Car Lifts"
            imgLoc={require("../images/PRODUCTS/CAR-LIFTS.webp")}
            animate="fade-left"
          />
          <ProdCard
            title="Cage Hoist Goods Lifts"
            imgLoc={require("../images/PRODUCTS/CAGE-HOIST-GOODS-LIFTS.jpg")}
            animate="fade-right"
          />

          <ProdCard
            title="Chair/Stair Lift"
            imgLoc={require("../images/PRODUCTS/CHAIR-STAIR-LIFTS.jpeg")}
            animate="fade-left"
          />
          <ProdCard
            title="Dumbwaiter-Service Lifts"
            imgLoc={require("../images/PRODUCTS/DUMBWAITER-SERVICE-LIFTS.jpg")}
            animate="fade-right"
          />


          <ProdCard
            title="Platform Lifts"
            imgLoc={require("../images/PRODUCTS/PLATFORM-LIFTS.jpeg")}
            animate="fade-right"
          />

          <ProdCard
            title="Scissor Lifts"
            imgLoc={require("../images/PRODUCTS/SCISSOR-LIFTS.jpeg")}
            animate="fade-right"
          />
          <ProdCard
            title="SPLU Lifts"
            imgLoc={require("../images/PRODUCTS/SPLU-LIFTS.jpeg")}
            animate="fade-left"
          />
          <ProdCard
            title="Stretcher Lifts"
            imgLoc={require("../images/PRODUCTS/STRETCHER-LIFTS.jpg")}
            animate="fade-right"
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
          title="Elevator Solutions"
          content="At Core Elevators, our mission is to improve the flow of urban life. As a global leader in the elevator and escalator industry, Core Elevators provides elevators, escalators and automatic building doors, as well as solutions for maintenance and modernization to add value to buildings throughout their life cycle."
          imgLoc={require("../images/OUR_SERVICES/ELEVATOR SOLUTIONS/1.jpg")}
          animate="fade-left"
        />
        <ServicesCard
          title="Maintenance & Repairs"
          content="Whatever brand or type of equipment you have, with Core Elevators you can count on maintenance expertise that will keep it running smoothly and safely for its entire lifespan – and a customer experience that is second to none."
          imgLoc={require("../images/OUR_SERVICES/MAINTENANCE/1.jpg")}
          animate="fade-right"
        />
        <ServicesCard
          title="Modernisation & Upgradation"
          content="Core Elevators modernization solutions are tailored to your exact needs, ranging from component upgrades to full replacement of existing equipment, as well as retrofit installations. Their purpose is simple – to keep your equipment running safely and reliably for the lifetime of your building."
          imgLoc={require("../images/OUR_SERVICES/MODERNISATION/lobby.jpeg")}
          animate="fade-left"
        />
      </div>
    </section>
    <section id="gallery" className="section-features gallery">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <span>Gallery</span>
          <p>Our Photo Gallery</p>
        </div>

        {/* <div id="carouselDark" class="carousel carousel-light slide mx-auto" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={require("../images/GALLERY/5.jpeg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={require("../images/GALLERY/2.jpeg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={require("../images/GALLERY/4.jpeg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<div className="row">
<div class="owl-carousel owl-theme">
    <div class="item"><img src="https://picsum.photos/200/300"/></div>
    <div class="item"><img src="https://picsum.photos/200/300"/></div>
    <div class="item"><img src="https://picsum.photos/200/300"/></div>
  <div class="item"><img src="https://picsum.photos/200/300"/></div>
  <div class="item"><img src="https://picsum.photos/200/300"/></div>
</div>
</div>
</div>
      
      
    </section>
    <section id="about" className="section-features about dark">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <span>About Us</span>
          <p>Get to know us</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={require("../images/ABOUT/about.jpg")} className="img-fluid" alt="" />
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

    <section id="contact" className="section-features contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <span>Contact</span>
          <p>Reach out to Us</p>
        </div>
        <div className="row mt-5 map-and-details">
          <div className="col-lg-4 col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.63994827439!2d75.56996351443664!3d21.00706518601009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f91442a1db3%3A0x79b99e3309fcb795!2sCore%20Elevators!5e0!3m2!1sen!2sin!4v1665475863309!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                <a href="https://api.whatsapp.com/send?phone=917558699120&text=" className="whatsapp-button" target="_blank">
                  <i className='bx bxl-whatsapp'></i>
                  <h5 className="whatsapp-connect">Connect with us on WhatsApp!</h5>
                </a>
              </div>

            </div>

          </div>
        </div>


      </div>
    </section>

    <section id="enquiry" className="section-features enquiry dark">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <span>Enquiry Form</span>
          <p>Submit an enquiry</p>
        </div>
        <form action="https://formsubmit.co/junaidpinjari2002@gmail.com" method="post" className="php-email-form mx-auto" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Enquiry!" />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table" />
          <div className="row">
            <div className="col-lg-6 col-md-12 form-group">
              <input type="text" name="Name" className="form-control basic" id="name" placeholder="Your Name" required autoComplete="off" />
            </div>
            <div className="col-lg-6 col-md-12 form-group mt-3 mt-md-0">
              <input type="email" name="Email" className="form-control basic" id="email" placeholder="Your Email" required autoComplete="off" />
            </div>
          </div>

          <div className="checkbox-form form-group">
            <h3 className="checkbox-title">Enquiry Type</h3>
            <div className="form-check form-check-inline" id="checkbox-option1" onClick={checkboxClicked}>
              <input className="form-check-input" type="radio" name="Enquiry Type" id="new-lifts" value="New Lifts" required />
              <label className="form-check-label" for="new-lifts">New Lifts</label>
            </div>
            <div className="form-check form-check-inline" id="checkbox-option2" onClick={checkboxClicked}>
              <input className="form-check-input" type="radio" name="Enquiry Type" id="maintenance" value="Maintenance & Repairs" required />
              <label className="form-check-label" for="maintenance">Maintenance & Repairs</label>
            </div>
            <div className="form-check form-check-inline" id="checkbox-option3" onClick={checkboxClicked}>
              <input className="form-check-input" type="radio" name="Enquiry Type" id="other" value="Other" required />
              <label className="form-check-label" for="other">Other</label>
            </div>
          </div>
          {/* NEW-LIFTS & MAINTENANCE GENERAL FIELDS */}
          <div className="general hide all">
            {/* CITY */}
            <div className="form-group mt-3">
              <input className="form-control basic" disabled='true' id="city" name="City" placeholder="City" required />
            </div>
            {/* CAPACITY */}
            <div className="form-group mt-3">
              <input className="form-control basic" disabled='true' id="passengers" name="Passenger Capacity" placeholder="No. of Passengers (Capacity)" required />
            </div>
            {/* FLOOR NO. */}
            <div className="form-group mt-3">
              <input className="form-control basic" disabled='true' id="floor-numbers" name="Floors" placeholder="Number of Floors (Example: G + 3)" required />
            </div>
            {/* LIFT TYPE */}
            <div className="checkbox-form">
              <h3 className="checkbox-title">Lift Type</h3>
              <div className="form-check form-check-inline" id="checkbox-optionPassenger" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Lift Type" id="inlineRadioPassenger" value="Passenger Lift" required />
                <label className="form-check-label" for="inlineRadioPassenger">Passenger</label>
              </div>
              <div className="form-check form-check-inline" id="checkbox-optionHospital" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Lift Type" id="inlineRadioHospital" value="Hospital Lift" required />
                <label className="form-check-label" for="inlineRadioHospital">Hospital</label>
              </div>
              <div className="form-check form-check-inline" id="checkbox-optionGoods" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Lift Type" id="inlineRadioGoods" value="Goods Lift" required />
                <label className="form-check-label" for="inlineRadioGoods">Goods</label>
              </div>
              <div className="form-check form-check-inline" id="checkbox-optionOther" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Lift Type" id="inlineRadioOther" value="Other Lift" required />
                <label className="form-check-label" for="inlineRadioOther">Other</label>
              </div>
            </div>

            {/* DOOR TYPE */}
            <div className="checkbox-form">
              <h3 className="checkbox-title">Door Type</h3>
              <div className="form-check form-check-inline" id="checkbox-optionManual" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Door Type" id="inlineRadioManual" value="Manual Doors" required />
                <label className="form-check-label" for="inlineRadioManual">Manual</label>
              </div>
              <div className="form-check form-check-inline" id="checkbox-optionAutomatic" onClick={checkboxClicked}>
                <input className="form-check-input" disabled='true' type="radio" name="Door Type" id="inlineRadioAutomatic" value="Automatic Doors" required />
                <label className="form-check-label" for="inlineRadioAutomatic">Automatic</label>
              </div>
            </div>
          </div>
          {/* NEW-LIFTS ONLY FIELDS */}
          <div className="new-lifts hide all">
            {/* <div className="form-group mt-3">
            <input className="form-control basic" disabled='true' id="address" name="Address" placeholder="Address" required />
          </div> */}
          </div>
          {/* MAINTENANCE ONLY FIELDS */}
          <div className="maintenance hide all">
            <div className="form-group mt-3">
              <input className="form-control basic" disabled='true' id="brand" name="Brand" placeholder="Lift Brand" required />
            </div>
          </div>
          {/* OTHER ONLY FIELDS */}
          <div className="other hide all">
            <div className="form-group mt-3">
              <textarea className="form-control" disabled='true' id="message" name="Message" rows="5" placeholder="Message" required></textarea>
            </div>
          </div>
          <div className="loader-holder">
            <div className="loader mx-auto"></div>
          </div>
          <div className="alert alert-success hide" role="alert">
            <i className='bx bxs-message-alt-check'></i>Enquiry submitted successfully.<br className="mobile-break hide" /> We will get back to you shortly!
          </div>
          <div className="alert alert-danger hide" role="alert">
            <i className='bx bxs-message-alt-error'></i>Error! Please try again.
          </div>
          <div className="text-center"><button type="submit">Submit</button></div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
}

export default Home