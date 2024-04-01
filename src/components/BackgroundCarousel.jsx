import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage2 from '../assets/Indian wedding.gif';
import backgroundImage1 from '../assets/bg.jpg';
// Import other background images as needed

const BackgroundCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300, // Adjust autoplay speed as needed
    };

    console.log('Background Image 2:', backgroundImage2);

    return (
        <Slider {...settings}>
            <div className="h-screen bg-cover bg-center">
                <img src={"/assets/bg-latest.jpg"}></img>
            </div>
            <div className="h-screen bg-cover bg-center">
                <img src={"/assets/bg1.jpg"}></img>
            </div>
            <div className="h-screen bg-cover bg-center">
                <img src={"/assets/bg2.jpg"}></img>
            </div>
        </Slider>
    );
};

export default BackgroundCarousel;
