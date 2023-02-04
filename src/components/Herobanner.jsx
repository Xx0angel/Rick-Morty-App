import React from 'react'
import RickHero1 from '../img/hero1.png'
import RickHero2 from '../img/hero2.jpg'
import RickHero3 from '../img/hero3.jpg'
import '../Herobanner.css'


function Herobanner() {
    return (
        <div id="carouselExampleIndicators" className="mb-5 carousel slide carousel__box">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={RickHero1} className="item-carousel d-block w-100" 
                    alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={RickHero2} className="item-carousel d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={RickHero3} className="item-carousel d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Herobanner