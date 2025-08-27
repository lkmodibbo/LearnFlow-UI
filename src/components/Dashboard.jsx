import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  padding: 24px;
  margin: 40px auto;
  align-items: flex-start;
  gap: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;


  @media (max-width: 768px){
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* margin-left: 40px; */
  }
`;

const UserInfo = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;
  text-align: left;

  h2 {
    width: 500px;
    text-align: justify;
    color: #444;
    font-size: 24px;
    margin-bottom: 10px;
    padding: 10px;
  }

  p {
    margin: 12px 0;
    line-height: 1.6;
    padding: 5px;
    color: #555;
    font-weight: 380;
  }
`;

const CourseInfo = styled.div`
  flex: 2;
  padding: 20px;
  text-align: center;

  img {
    width: 100%;
    max-width: 500px;
    margin-bottom: 16px;
    border-radius: 10px;
  }

  p {
    font-size: 24px;
    text-transform: capitalize;
    color: #444;
  }

  button {
    padding: 12px 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  if (!userData) return <p>No user Data. Please sign up</p>;

  return (
    <Container>
      <UserInfo>
        <h2>Welcome, {userData.name}</h2>
        <p><strong>Your Course: </strong>{userData.course.title}</p>
        <p><strong>Course Description: </strong>{userData.course.description}</p>
        <p>Enrolled on: {userData.enrolledAt}</p>
        <p>Course Duration: 4 Weeks</p>
        <p>Progress: 0% Completed</p>
        <p>Status: <em>Not Started</em></p>
      </UserInfo>

      <CourseInfo>
        <img src={userData.course.image} alt="course-image" />
        <p>course modules: Number of Modules</p>
        <button onClick={() => navigate('/userspage')}>Start Course</button>
      </CourseInfo>
    </Container>
  );
};

export default Dashboard;
