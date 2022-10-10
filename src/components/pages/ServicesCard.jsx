import React from "react"

function ServicesCard(props){
    return <article class="postcard dark blue" data-aos={props.animate} data-aos-delay="250" data-aos-duration="800">
    <a class="postcard__img_link" href="#">
        <img class="postcard__img" src={props.imgLoc} alt="Image Title" />
    </a>
    <div class="postcard__text">
        <h1 class="postcard__title blue"><a href="#">{props.title}</a></h1>
        <div class="postcard__subtitle small">
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">{props.content}</div>
    </div>
</article>
}

export default ServicesCard