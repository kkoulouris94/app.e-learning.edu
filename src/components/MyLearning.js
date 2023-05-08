import React, { useEffect, useState } from 'react';
import authService from '../services/auth-service';

import MyCourseItem from './MyCourseItem';
import { withRouter } from '../common/with-router';

const MyLearning = (props) => {
  const [myCourses, setMyCourses] = useState(null);

  useEffect(() => {
    authService
      .me()
      .then((response) => {
        setMyCourses(response.data.data.courses);
      })
      .catch((err) => {
        const code = err.response.status;
        if (code === 401) {
          alert('Your session has expired. Please log in again');
          props.router.navigate('/login');
        } else if (code === 500) {
          alert('Server error. Please try again');
        }
      });
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Title</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCourses &&
                myCourses.map((course) => (
                  <MyCourseItem
                    key={course.id}
                    completeCourseHandler={() => window.location.reload()}
                    course={course}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyLearning);
