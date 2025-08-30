import styled from "styled-components";


const StudentDashboard = () => {
  return (
    <DashboardContainer>
        <Header>
            <div>Student Dashboard</div>
        </Header>

        <Profile>
            <Avatar>👤</Avatar>
            <div>
                <Strong>Name of Student</Strong>
            </div>
        </Profile>

        <CourseSection>
            <SectionTitle>Enrolled Course</SectionTitle>
        <CourseList>
            <CourseCard>
                <Thumbnail />
                <div>Course 1</div>
                <small>Instructor 1</small>
                <ProgressBar>
                    <div></div>
                </ProgressBar>
            </CourseCard>
             <CourseCard>
                <Thumbnail />
                <div>Course 1</div>
                <small>Instructor 1</small>
                <ProgressBar>
                    <div></div>
                </ProgressBar>
            </CourseCard>
             <CourseCard>
                <Thumbnail />
                <div>Course 1</div>
                <small>Instructor 1</small>
                <ProgressBar>
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
                <label>Module 1</label>
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
  width: 100%;
  min-height: 100vh;
  background: #f9f9f9;
  padding: 2rem;
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
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CourseCard = styled.div`
  flex: 1;
  min-width: 150px;
  padding: 1rem;
  background: white;
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