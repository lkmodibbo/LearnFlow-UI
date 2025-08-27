import React, { useContext } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const UsersPage = () => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <UsersDashboard>
      <UsersInfo>
        <ProfilePicSection>
          <ProfilePicWrapper>
            <ProfilePic 
              src={userData.profilePic} 
              alt="profile"
            />
            <UploadCon>
              <FaUserCircle className='upload-icon'/>
              <input type='file' style={{display: 'none'}}/>
            </UploadCon>
          </ProfilePicWrapper>
          <h2>Welcome, {userData.name}</h2>
        </ProfilePicSection>
        <p><strong>Email: {userData.email}</strong></p>
        <p><strong>Course: {userData.course.title}</strong></p>
        <p><strong>Duration: {userData.duration}</strong></p>
        <p><strong>Status: <em>Not Started</em></strong></p>

        <ActionButtons>
          <button onClick={() => navigate('./edit-profile')}>Edit Profile</button>
        </ActionButtons>
      </UsersInfo>

      <CourseInfo>
        <CourseContent>
          <h2>Course Modules</h2>
        </CourseContent>
        <Modules>
          <li>
            <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
          <li>
             <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
          <li>
            <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
          <li>
           <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
          <li>
            <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
          <li>
           <label>
              <input type='checkbox'/>
                List of Modules Of The Course
            </label>
            </li>
        </Modules>
        <StartButton onClick={() => navigate('./start-course')}>Start Course</StartButton>
      </CourseInfo>
    </UsersDashboard>
  )
}

export default UsersPage

// Styled Components

const UsersDashboard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-left: 20%;
    width: 100%;
   
  }
`

const UsersInfo = styled.div`
  width: 600px;
  margin: 2rem 0 2rem 5rem;
  border-right: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`

const ProfilePicSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`

const ProfilePicWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  position: relative;
  background-color: #eee;
  border: 2px solid #ccc;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
`

const UploadCon = styled.label`
  position: absolute;
  bottom: 80px;
  right: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .upload-icon {
    font-size: 1.2rem;
    color: #4f8ef7;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`

const ActionButtons = styled.div`
  text-align: center;
  padding: 10px 15px;

  button {
    padding: 12px 20px;
    border: 1px solid #ccc;
    color: #fff;
    background-color: #4f8ef7;
    border-radius: 5px;
    cursor: pointer;
  }
`
const CourseInfo = styled.div`
  padding: 5px;
  text-align: center;

  button{
    color: #fff;
    padding: 15px 25px;
    border: none;
    background-color: #4f8ef7;
    border-radius: 8px;
  }
`

const CourseContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 10px;
 
  button {
    margin-bottom: 2rem;
  }

  h2{
    color: #4f8ef7;
    padding: 10px;
  }
`
const Modules = styled.ul`
  li {
    display: flex;
    gap: 0px;
    align-items: center;
    text-align: justify;
    margin: 10px auto;
    padding: 10px;
    line-height: 1.6;
    list-style: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  
  input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: #4f8ef7;
}
`;
const StartButton = styled.button`
  padding: 13px 18px;
  border: none;
  background-color: #4f8ef7;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 10px;
  color: #fff;

`
