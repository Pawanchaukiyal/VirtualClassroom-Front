// // src/pages/CourseMaterials.jsx
// import React from 'react';
// import CourseContent from '../components/CourseMaterialComponents/CourseContent';
// import LectureResources from '../components/CourseMaterialComponents/LectureResources';

// const CourseMaterials = () => {
//   return (
//     <div>
//       <CourseContent />
//       <LectureResources />
//     </div>
//   );
// };

// export default CourseMaterials;
// src/pages/CourseMaterialPage.jsx
import React, { useState } from 'react';
import LectureList from '../components/CourseMaterialComponents/CourseList';
import LectureDetail from '../components/CourseMaterialComponents/CourseDetail';

const CourseMaterialPage = () => {
  const [selectedLecture, setSelectedLecture] = useState(null);
  
  // Sample data
  const lectures = [
    { id: 1, title: 'Introduction to React', materials: [], comments: [] },
    { id: 2, title: 'Advanced React Concepts', materials: [], comments: [] },
  ];

  const handleSelectLecture = (lectureId) => {
    const lecture = lectures.find((lec) => lec.id === lectureId);
    setSelectedLecture(lecture);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <LectureList lectures={lectures} onSelectLecture={handleSelectLecture} />
        </div>
        <div>
          {selectedLecture ? (
            <LectureDetail lecture={selectedLecture} />
          ) : (
            <p className="text-center">Please select a lecture to view its details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseMaterialPage;
