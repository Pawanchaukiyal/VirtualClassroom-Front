import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images here
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

import {useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change slides every 5 seconds
  };

  return (
    <div className="relative overflow-hidden h-80 md:h-[500px] lg:h-[600px]">
      <Slider {...settings} className="w-full h-full">
        <div className="relative w-full h-full">
          <img src={image1} alt="Slide 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Our Platform</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">Discover amazing features and experiences.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm md:text-base lg:text-lg">Get Started</button>
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src={image2} alt="Slide 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Learn and Grow</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">Join our community and enhance your skills.</p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm md:text-base lg:text-lg">Explore More</button> */}
          </div>
        </div>
        <div className="relative w-full h-full">
          <img src={image3} alt="Slide 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Join Us Today</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6">Become a part of our vibrant community.</p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm md:text-base lg:text-lg" 
              onClick={() => navigate('/register')} 
            >Sign Up</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
