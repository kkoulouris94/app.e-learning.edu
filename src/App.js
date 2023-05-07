import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthService from './services/auth-service';
import Login from './components/Login';
import CoursesList from './components/CoursesList';
import Navbar from './components/Navbar';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <>
      <Navbar
        currentUser={currentUser}
        logout={logout}
      />
      <div className='container mt-3'>
        <Routes>
          <Route
            exact
            path='/'
            element={<Navigate to={<CoursesList />} />}
          />
          <Route
            path='/courses'
            element={<CoursesList />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
