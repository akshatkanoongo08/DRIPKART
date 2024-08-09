import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../pages/Login.css"; // Ensure the import is correct

function Login() {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/login', values);
      if (res.status === 200) {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        message.success('Login successful');
        navigate('/homepage');
      } else {
        message.error(res.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      message.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className='page-container'>
      <div className='form-container'>
        <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Log in to your account</h3>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input type="password" />
          </Form.Item>
          <Link to={"/signup"} className='ms-2'>Not a user? Register here</Link>
          <button className='btn btn-primary' type='submit'>Login</button>
        </Form>
      </div>
      <div className='image-container'></div>
    </div>
  );
}

export default Login;


