import React from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const CourseItem = ({ course }) => {
  return (
    <div className='card text-start flex-item'>
      <div className='card-body'>
        <h5 className='card-title'>{course.title}</h5>
        <p className='card-text'>{course.description}</p>
      </div>
      <div className='card-footer text-end'>
        <Link
          to={`/courses/${course.id}`}
          className='btn btn-primary'
        >
          Preview
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
