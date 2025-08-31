import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../components/LogoImage';

// Styled Components
const AuthContainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 20px 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: none;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
   margin-top: 13%;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Input = styled.input`
  width: 300px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 100%;
  margin: 0 auto;
  background-color: #202020;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;


  &:hover {
    opacity: 0.7;
  }

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
const CenteredLogo = styled(LogoImage) `
  text-align: center;
  font-size: 24px;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;
const OptionsRow = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: -5px;
`;

const ShowPasswordToggle = styled.span `
  cursor: pointer;
  color: #202020;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
const LoginTitle = styled.p`
  color: #333;
  text-align: center;
`;


const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('logging in with:', formData);
    
  }

  return (
    <>
    <AuthContainer>
      <CenteredLogo />
      <AuthForm onSubmit={handleSubmit}>
         <LoginTitle>Login Your Account and start Learning</LoginTitle>
        <Input 
          type='email' 
          name='email' 
          placeholder='Enter Your Email Address'
          value={formData.email}
          onChange={handleChange}
          required
          />
        <Input 
          type={showPassword ? 'text' : 'password'} 
          name='password'
          placeholder='Enter Your Password'
          value={formData.password}
          onChange={handleChange} 
          required   
          />

            <OptionsRow>
          <ShowPasswordToggle onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </ShowPasswordToggle>
          <StyledLink to="/forget-password">Forgot Password?</StyledLink>
        </OptionsRow>

      <StyledLink to="/dashboard">
        <Button type="button">Login</Button>
    </StyledLink>

      </AuthForm>    
      <AuthLinkContainer> 
        <AuthText>
          <StyledLink to='/signup'>Dont have an Account? SignUp here</StyledLink>
        </AuthText>
      </AuthLinkContainer>
    </AuthContainer>
  </>
  );
};

export default LoginForm;
