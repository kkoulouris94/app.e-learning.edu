import React, { useEffect, useState } from 'react';
import authService from '../services/auth-service';

import MyCourseItem from './MyCourseItem';

const MyLearning = () => {
  const [myCourses, setMyCourses] = useState(null);

  useEffect(() => {
    authService.me().then((response) => {
      setMyCourses(response.data.data.courses);
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

export default MyLearning;
