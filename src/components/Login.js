import React, { useRef, useState } from 'react';

import { withRouter } from '../common/with-router';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import AuthService from '../services/auth-service';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(email, password).then(
      () => {
        props.router.navigate('/courses');
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <Form
          onSubmit={handleLogin}
          ref={form}
        >
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Input
              type='text'
              className='form-control'
              name='email'
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className='form-group'>
            <button
              className='btn btn-primary btn-block'
              disabled={isLoading}
            >
              {isLoading && (
                <span className='spinner-border spinner-border-sm'></span>
              )}
              <span>Login</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Login);
