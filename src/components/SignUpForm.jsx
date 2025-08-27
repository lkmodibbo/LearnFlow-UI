import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import GmailImage from '../assets/Gmail_basics.png';
import GoogleImage from '../assets/Google_docs.jpeg';
import InternetImage from '../assets/internet_research.jpeg';
import AIImage from '../assets/AI-Tools.jpeg';
import GoogleDriveImage from '../assets/file_storage.png';
import OnlineImage from '../assets/Online_safety.png';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const courses = [
    {
      title: "Gmail Basics",
      description: "Master how to send emails, manage inboxes, and use attachments professionally.",
      image: `${GmailImage}`,
      duration: '4 weeks'
    },
    {
      title: "Google Docs Mastery",
      description: "Learn to create, edit, and collaborate on documents like a pro",
      image: `${GoogleImage}`,
      duration: '4 weeks'
    },
    {
      title: "Internet Research skills",
      description: "Develop smart strategies for finding reliable information online quickly.",
      image: `${InternetImage}`,
      duration: '4 weeks'
    },
    {
      title: "Introduction To AI Tools",
      description: "Discover how AI like ChatGPT can boost your learning and productivity.",
      image: `${AIImage}`,
      duration: '4 weeks'
    },
    {
      title: "Google Drive and File Storage",
      description: "Learn how to organize, store, and access files anywhere, safely.",
      image: `${GoogleDriveImage}`,
      duration: '4 weeks'
    },
    {
      title: "Online Safety and Security",
      description: "Protect your accounts and stay safe while navigating the internet.",
      image: `${OnlineImage}`,
      duration: '4 weeks'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const courseDetails = courses.find(c => c.title === formData.course);

    setUserData({
      email: formData.email,
      name: formData.name,
      course: courseDetails,
      duration: courseDetails.duration,
      enrolledAt: new Date().toLocaleDateString()
    });

    console.log('Signing up with:', formData);
    navigate('/dashboard');
  };

  return (
    <AuthContainer>
      <h2>Join LearnFlow</h2>
      <p className="auth-tagline">Start your journey to digital mastery. Get access to career-ready skills, personalized just for you.</p>

      <AuthForm onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
          required autoFocus 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Enter Your Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Enter Your Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required /
        >
        <select 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Course</option>
          <option value="Gmail Basics">Gmail Basics</option>
          <option value="Google Docs Mastery">Google Docs</option>
          <option value="Introduction To AI Tools">AI Tools</option>
          <option value="Google Drive and File Storage">Google Drive and File Storage</option>
          <option value="Internet Research skills">Internet Research Skill</option>
          <option value="Online Safety and Security">Online Safety and Security</option>
        </select>
        <select name="age" value={formData.age} onChange={handleChange} required>
          <option value="">Select Age Range</option>
          <option value="under18">Under 18</option>
          <option value="18-24">18 - 24</option>
          <option value="25-34">25 - 34</option>
          <option value="35-44">35 - 44</option>
          <option value="45plus">45 and above</option>
        </select>
        <input name="password" type="password" placeholder="Enter Your Password" value={formData.password} onChange={handleChange} required />
        {formData.password && (
          <small>
            {formData.password.length < 8
              ? 'Password too short (minimum of 8 characters)'
              : 'Strong password'}
          </small>
        )}
        <input 
          name="confirmPassword" 
          type="password" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Sign Up</button>
      </AuthForm>
      <p className="have-an-account">Already have an account? <StyledLink to="/login">Login here</StyledLink> </p>
    </AuthContainer>
  );
};

export default SignUpForm;

// Styled-components
const AuthContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 10px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  .auth-tagline {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 1.5rem;
  }

  .have-an-account {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  small {
    color: #999;
    font-size: 0.75rem;
    display: block;
    text-align: left;
    margin-bottom: 1rem;
 
 }

   @media (max-width: 768px){
      width: 450px;
      margin: 15px;
    }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, select {
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;

  }

  button {
    background-color: #007bff;
    color: white;
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
