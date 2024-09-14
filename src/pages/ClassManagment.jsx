// // src/pages/ClassManagement.jsx
// import React from 'react';
// import ManageClasses from '../components/ClassManagment/ManageClasses';

// const ClassManagement = () => {
//   return (
//     <div>
//       <ManageClasses />
//     </div>
//   );
// };

// export default ClassManagement;
// src/pages/ClassManagementPage.jsx
import React, { useState } from "react";
import ClassList from "../components/ClassManagment/ClassList";
import ClassDetails from "../components/ClassManagment/ClassDetails";
import UnitManagement from "../components/ClassManagment/Unitmanagement";
import SessionManagement from "../components/ClassManagment/SessionManagment";

const ClassManagementPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, setClasses] = useState([]); // Replace with actual data fetching

  const handleEditClass = (id) => {
    // Implement edit functionality
  };

  const handleDeleteClass = (id) => {
    // Implement delete functionality
  };

  return (
    <div className="container mx-auto p-4">
      <ClassList
        classes={classes}
        onEdit={handleEditClass}
        onDelete={handleDeleteClass}
      />
      {selectedClass && (
        <>
          <ClassDetails classDetail={selectedClass} />
          <UnitManagement
            units={selectedClass.units}
            onAdd={handleAddUnit}
            onEdit={handleEditUnit}
            onDelete={handleDeleteUnit}
          />
          <SessionManagement
            sessions={selectedClass.units.flatMap((unit) => unit.sessions)}
            onAdd={handleAddSession}
            onEdit={handleEditSession}
            onDelete={handleDeleteSession}
          />
        </>
      )}
    </div>
  );
};

export default ClassManagementPage;
