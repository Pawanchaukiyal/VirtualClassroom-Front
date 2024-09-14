// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/main/main';
import Footer from './components/Footer/Footer';

import Home from './pages/Homepage';
import Dashboard from './pages/Dasboard';
import ClassManagement from './pages/ClassManagment';
import CourseMaterials from './pages/CourseMaterials';
import DiscussionForum from './pages/DiscussionFourm';
import Enrollment from './pages/Enrollments';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import PasswordResetPage from './pages/PasswordReset';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/class-management" element={<ClassManagement />} />
              <Route path="/course-materials" element={<CourseMaterials />} />
              <Route path="/discussion-forum" element={<DiscussionForum />} />
              <Route path="/enrollment" element={<Enrollment />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/password-reset" element={<PasswordResetPage />} />
            </Routes>
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
