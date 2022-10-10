import React from "react"

function ProdCard(props){
  return <div className="item" data-aos={props.animate} data-aos-delay="250" data-aos-duration="800">
    <img src={props.imgLoc} alt="product" href='#home'/>
    <h4>{props.title}</h4>
  </div>
}
export default ProdCard