import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import slider1 from '../../../assets/slider/slider-7.jpg';
import slider2 from '../../../assets/slider/slider-8.jpg';
import slider3 from '../../../assets/slider/slider-3.jpg';
import slider4 from '../../../assets/slider/slider-4.jpg';
import slider5 from '../../../assets/slider/slider-5.jpg';
import slider6 from '../../../assets/slider/slider-6.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div >
                    <img  src={slider1} />
                   
                </div>
                <div>
                    <img src={slider2} />
                   
                </div>
                <div>
                    <img src={slider3} />
                   
                </div>
                <div>
                    <img src={slider4} />
                   
                </div>
                <div>
                    <img src={slider5} />
                   
                </div>
                <div>
                    <img src={slider6} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;