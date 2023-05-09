import React, { useEffect, useState } from 'react';
import coursesService from '../services/courses-service';
import CourseItem from './CourseItem';
import { withRouter } from '../common/with-router';

const CoursesList = (props) => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    coursesService
      .fetchAllCourses()
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((err) => {
        alert('You need to sign in to view this page');
        props.router.navigate('/login');
      });
  }, []);

  return (
    <div className='container-fluid text-center flex-container'>
      <h1>Available Courses</h1>
      {courses &&
        courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
          />
        ))}
    </div>
  );
};

export default withRouter(CoursesList);
