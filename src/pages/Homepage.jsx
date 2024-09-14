// src/pages/Home.jsx
import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/HeroSection/Hero';
import CourseInfo from '../components/CourseInfo';
import WhoInfo from '../components/WhoInfo';

const Home = () => {
  return (
    <>
      <NavBar/>
      {/* <h1 className="text-2xl mt-5 font-bold mb-6">Welcome to the Virtual Classroom</h1> */}
      <Hero/>
      <h1 className='text-4xl m-4 font-bold font-serif'> Glimpse of Courses:</h1>
       <CourseInfo/>
       <WhoInfo/>
    </>
  );
};

export default Home;
