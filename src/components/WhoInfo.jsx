// components/WhoInfo.jsx
import React from 'react';
import WhoCard from './card/WhoCard';

const WhoInfo = () => {
  // Sample data for occupations with online image URLs
  const occupations = [
    {
      occupation: 'teacher',
      image: 'https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg', // Online image URL
      button: 'View Teacher Info',
    },
    {
      occupation: 'student',
      image: 'https://cdn.vectorstock.com/i/preview-1x/93/62/a-man-using-laptop-cartoon-vector-44469362.jpg', // Online image URL
      button: 'View Student Info',
    },
    {
      occupation: 'admin',
      image: 'https://th.bing.com/th/id/OIP.BKbC5Fr-D0e-5a1UBJkuewHaEb?rs=1&pid=ImgDetMain', // Online image URL
      button: 'View Admin Info',
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {occupations.map((item, index) => (
          <WhoCard
            key={index}
            occupation={item.occupation}
            image={item.image}
            button={item.button}
          />
        ))}
      </div>
    </div>
  );
};

export default WhoInfo;
