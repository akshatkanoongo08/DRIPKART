import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
// import '../styles/RegisterStyles.css'
import '../pages/Signup.css'

function SignUp() {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  const onFinishHandler = async (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('bio', values.bio);
    if (fileList.length > 0) {
      formData.append('profilePicture', fileList[0]);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.message === 'User registered successfully') {
        message.success('Registration successful');
        navigate('/');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList.slice(-1));
  };

  return (
    <div className='form-container'>
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
        <h3 className='text-center'>Register Form</h3>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="Bio" name="bio">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Profile Picture">
          <Upload
            beforeUpload={() => false}
            onChange={handleUploadChange}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Upload (Optional)</Button>
          </Upload>
        </Form.Item>
        <Link to="/" className='ms-2'>Already have an account? Login here</Link>
        <Button type='primary' htmlType='submit' className='btn btn-primary'>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
