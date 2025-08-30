import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "./UserContext"; 


const StudentDashboard = () => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <p>Loading User Info...</p>
  }

  return (
    <DashboardContainer>
        <Header>
            <div>Student Dashboard</div>
        </Header>

        <Profile>
            <Avatar>👤</Avatar>
            <div>
                <Strong>{userData.name}</Strong>
                <Strong>{userData.email}</Strong>
            </div>
        </Profile>

        <CourseSection>
            <SectionTitle>{userData.course.title}</SectionTitle>
        <CourseList>
            <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
        </CourseCard>
            <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
          </CourseCard>
             <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
          </CourseCard>
             <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
          </CourseCard>
            <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
          </CourseCard>
            <CourseCard>
            <Thumbnail>
              <PlayIcon>▶</PlayIcon>
              <Duration>12:45</Duration>
            </Thumbnail>
            <div>Module 4: React Hooks</div>
            <small>Instructor 1</small>
            <ProgressBar progress="45%">
              <div></div>
            </ProgressBar>
          </CourseCard>

        </CourseList>
        </CourseSection>

        <ModuleList>
            <SectionTitle>Course Modules</SectionTitle>
            <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 1</label>
            </ModuleItem>
            <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 2</label>
            </ModuleItem>
             <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 3</label>
            </ModuleItem>
             <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 4</label>
            </ModuleItem>
             <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 5</label>
            </ModuleItem>
             <ModuleItem>
                <input type='checkbox' checked readOnly/>
                <label>Module 6</label>
            </ModuleItem>
        </ModuleList>
        <Tracker>
            <ProgressBar>
                <div></div>
            </ProgressBar>
            30% Completed
        </Tracker>
    </DashboardContainer>
  )
}

export default StudentDashboard;

const DashboardContainer = styled.div`
  width: 95%;
  min-height: 100vh;
  padding: 1rem;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const CourseSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
`;

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  gap: 0.5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CourseCard = styled.div`
  min-width: 100px;
  width: 350px;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Strong = styled.p`
    color: black;
    font-size: 1rem;
`

const Thumbnail = styled.div`
  height: 80px;
  background: #eee;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
    width: 350px;
  height: 6px;
  background: #eee;
  border-radius: 6px;
  margin-top: 0.5rem;

  div {
    height: 100%;
    border-radius: 6px;
    background: #4caf50;
    width: ${(props) => props.progress || "0%"};
    transition: width 0.3s ease;
  }
`;

const ModuleList = styled.div`
  margin-bottom: 2rem;
`;

const ModuleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  input {
    accent-color: #4caf50;
  }
`;

const Tracker = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const PlayIcon = styled.div`
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 2%;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.99);
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Duration = styled.span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
`;
