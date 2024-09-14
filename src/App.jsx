import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/main/main';
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import PasswordResetPage from './pages/PasswordReset';

import TeacherPage from './pages/TeacherPage';
import CreateClass from './components/class/CreateClass';
import UpdateClass from './components/class/UpdateClass';
import DeleteClass from './components/class/DeleteClass';


const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/create-class" element={<CreateClass />} />
          <Route path="/update-class" element={<UpdateClass />} />
          <Route path="/delete-class" element={<DeleteClass />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
