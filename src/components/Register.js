import React, { useState } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import AuthService from '../services/auth-service';
import { withRouter } from '../common/with-router';

const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    AuthService.register(firstName, lastName, email, password).then(
      () => {
        props.router.navigate('/courses');
        window.location.reload();
      },
      (error) => {
        const code = error.response.status;
        if (code === 500) {
          alert('Server Error. Please try again');
        } else if (code === 400) {
          alert('Fill in your form and try again');
        }
      }
    );
  };

  return (
    <div className='col-md-12'>
      <div
        className='card card-container'
        style={{ padding: 20 }}
      >
        <Form onSubmit={handleRegistration}>
          <div>
            <div className='form-group'>
              <label htmlFor='first_name'>First Name</label>
              <Input
                type='text'
                className='form-control'
                name='first_name'
                value={firstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='last_name'>Last Name</label>
              <Input
                type='text'
                className='form-control'
                name='last_name'
                value={lastName}
                onChange={lastNameChangeHandler}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Input
                type='text'
                className='form-control'
                name='email'
                value={email}
                onChange={emailChangeHandler}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <Input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-primary btn-block'>Sign Up</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Register);
