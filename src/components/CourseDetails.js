import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coursesService from '../services/courses-service';
import { withRouter } from '../common/with-router';

const CourseDetails = (props) => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    coursesService
      .fetchOneCourse(courseId)
      .then((response) => {
        setCourse(response.data.data);
      })
      .catch((error) => {
        const code = error.response.status;
        if (code === 404) {
          alert('No course found with this id');
        } else if (code === 401) {
          alert('Your session has expired. Please log in again');
          props.router.navigate('/login');
        } else {
          alert('Server error. Please try again');
        }
      });
  }, []);

  const clickEnrollHandler = () => {
    coursesService
      .enrollToCourse(course.id)
      .then(() => {
        alert('Successfully enrolled in this course');
      })
      .catch((err) => {
        const code = err.response.status;
        if (code === 400) {
          alert('Already enrolled in this course');
        } else if (code === 401) {
          alert('Your session has expired. Please log in again');
          props.router.navigate('/login');
        } else {
          alert('Server error. Please try again');
        }
      });
  };

  return (
    <div>
      {course && (
        <>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div>
            <p>Instructor: {course.instructor}</p>
            <p>Skill Level: {course.skill_level}</p>
            <p>Lecture: {course.lectures}</p>
            <button
              type='button'
              className='btn btn-success'
              onClick={clickEnrollHandler}
            >
              Enroll
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(CourseDetails);
