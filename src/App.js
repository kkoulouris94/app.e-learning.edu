import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CoursesListPage from './pages/CoursesListPage';
import MyCoursesPage from './pages/MyCoursesPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Navigate to='/courses' />}
          />
          <Route
            path='/courses'
            element={<CoursesListPage />}
          />
          <Route
            path='/my-courses'
            element={<MyCoursesPage />}
          />
          <Route
            path='/sign-in'
            element={<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
