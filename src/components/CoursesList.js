import React, { useEffect, useState } from 'react';
import coursesService from '../services/courses-service';
import CourseItem from './CourseItem';

const CoursesList = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    coursesService.fetchAllCourses().then((response) => {
      setCourses(response.data.data);
    });
  }, []);

  return (
    <div className='container-fluid text-center flex-container'>
      {courses && courses.map((course) => <CourseItem course={course} />)}
    </div>
  );
};

export default CoursesList;
