import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const AuthContainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    margin: 20px 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: none;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #444;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: #4f8ef7;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const AuthLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #444;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

const AuthText = styled.p`
  margin: 10px 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #4f8ef7;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #3e7ec7;
  }
`;

const LoginForm = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('logging in with:', formData);
    navigate('/dashboard');
  }

  return (
    <AuthContainer>
      <Title>Login</Title>
      <AuthForm onSubmit={handleSubmit}>
        <Input 
          type='email' 
          name='email' 
          placeholder='Enter Your Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input 
          type='password' 
          name='password'
          placeholder='Enter Your Password'
          value={formData.password}
          onChange={handleChange} 
          required   
        />
        <Button type='submit'>Login</Button>
      </AuthForm>    
      <AuthLinkContainer>
        <AuthText>
          Forget Password? <StyledLink to='/forget-password'>Click here</StyledLink>
        </AuthText>  
        <AuthText>
          Don’t have an account? <StyledLink to='/signup'>SignUp here</StyledLink>
        </AuthText>
      </AuthLinkContainer>
    </AuthContainer>
  );
};

export default LoginForm;
