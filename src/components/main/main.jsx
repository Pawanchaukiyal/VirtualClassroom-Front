// src/components/MainContent.jsx
import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="ml-64 p-6">
      {children}
    </main>
  );
};

export default MainContent;
