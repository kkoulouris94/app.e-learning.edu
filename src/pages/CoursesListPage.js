import React from 'react';
import { useUser } from '../lib/useUser';

const CoursesListPage = () => {
  const { info } = useUser();
  if (!info) {
    return (
      <div className='p-16 bg-gray-800 h-screen'>
        <div className='text-2xl mb-4 font-bold text-white'>Dashboard</div>
        <div className='ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white' />
      </div>
    );
  }

  return <div>Courses List</div>;
};

export default CoursesListPage;
