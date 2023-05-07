import React, { useState } from 'react';
import coursesService from '../services/courses-service';

const MyCourseItem = ({ course, completeCourseHandler }) => {
  const [isLoading, setIsLoading] = useState(false);

  const completeCourse = (courseId) => {
    setIsLoading(true);
    coursesService
      .completeCourse(courseId)
      .then(() => {
        completeCourseHandler();
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <tr>
      <th scope='row'>{course.id}</th>
      <td>{course.title}</td>
      <td>
        <button
          onClick={() => completeCourse(course.id)}
          disabled={course.completed}
          type='button'
          className='btn btn-success'
        >
          {isLoading && (
            <span className='spinner-border spinner-border-sm'></span>
          )}
          {!isLoading && course.completed && <span>Completed</span>}
          {!isLoading && !course.completed && <span>Complete</span>}
        </button>
      </td>
    </tr>
  );
};

export default MyCourseItem;
