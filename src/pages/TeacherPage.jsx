import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const TeacherPage = () => {
  const navigate = useNavigate();

  const handleCreateClass = () => {
    navigate('/create-class');
  };

  const handleUpdateClass = () => {
    navigate('/update-class');
  };

  const handleDeleteClass = () => {
    navigate('/delete-class');
  };

  return (
    <>
      <NavBar />
      <div>
        <h1 className='font-mono text-4xl m-8'>Welcome Teacher 👋</h1>
        <p className='text-blue-700 text-2xl p-4'>
          Here You Can create, delete and update the classes.
        </p>

        <div
          className='create_div border-4 border-black p-4 m-4 text-center hover:cursor-pointer hover:bg-green-300 text-2xl hover:underline font-bold rounded-lg'
          onClick={handleCreateClass}
        >
          Click here to create the class.
        </div>

        <div
          className='update_div border-4 border-black p-4 m-4 text-center hover:cursor-pointer hover:bg-green-300 text-2xl hover:underline font-bold rounded-lg'
          onClick={handleUpdateClass}
        >
          Click here to update the class.
        </div>

        <div
          className='delete_div border-4 border-black p-4 m-4 text-center hover:cursor-pointer hover:bg-green-300 text-2xl hover:underline font-bold rounded-lg'
          onClick={handleDeleteClass}
        >
          Click here to delete the class.
        </div>
      </div>
    </>
  );
};

export default TeacherPage;
