 import { BsArrow90DegDown } from "react-icons/bs"
import { FaHome, FaBook, FaQuestionCircle, FaCertificate, FaChevronCircleLeft, FaPlus, FaBars } from "react-icons/fa"
import LogoImage from "./LogoImage"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react"



const StudentsDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const modules = [
    "Meaning Of Gmail",
    "Creating a Gmail account",
    "Feature Of Gmail",
    "Sending Emails",
    "Organizing Inbox",
    "Setting & Security"
  ];

  return (
    <StudentContent>
      <Sidebar open={isSidebarOpen}>
        <div style={{
          marginTop: '0px',
          paddingBottom: "15px",
          marginBottom: "20px",
          textAlign: "center"
          
        }}>
          <SidebarHeader>
        <LogoImage />
        <CloseButton onClick={() => setIsSidebarOpen(false)}>
           ✕
          </CloseButton>
        </SidebarHeader>
        </div>
        <SideBarList>
          <Link to="/dashboard" activeClassname="active">
            <FaHome /> <span>Dashboard</span>
          </Link>
          <Link to="/course" activeClassname="active">
            <FaBook /> <span>Courses</span>
          </Link>
          <Link to="/quiz" activeClassname="active">
            <FaQuestionCircle /> <span>Quiz</span>
          </Link>
          <Link to="/certificate" activeClassname="active">
            <FaCertificate /> <span>Certificate</span>
          </Link>
        </SideBarList>
      </Sidebar>

      <RightSection>
    <Navbar>
          <ToggleButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars />
      </ToggleButton>

      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}
        <Button as={Link} to="/dashboard" title="Back" aria-label="Go back to dashboard">
          <FaChevronCircleLeft />
        </Button>
      <UserSection>
        <Dropdown>
        <Username>LS</Username>
        <FaChevronDown />
        <DropdownMenu>
          <button>Profile</button>
          <button>Logout</button>
        </DropdownMenu>
        </Dropdown>
      </UserSection>
    </Navbar>

        <Header>Introduction to Gmail</Header>
        <MainSection>
          <Thumbnail>
            <Link to="">
              <PlayIcon>▶</PlayIcon>
            </Link>
            <Duration>20:45</Duration>
          </Thumbnail>
          <ModulesList>
            <h1>Modules</h1>
            <Cards>
              {modules.map((title, index) => (
                <Card to={`/module/${index}`} key={index}>
                <span>{title}</span>
                <FaPlus />
              </Card>
              ))}
            </Cards>
          </ModulesList>
        </MainSection>
      </RightSection>
    </StudentContent>
  )
}

export default StudentsDashboard

const StudentContent = styled.div`
  display: flex;
  height: 100vh;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
`;

const Navbar = styled.div`
  max-width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  height: 60px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;  
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  background: transparent;
  color: #333;

  svg {
    font-size: 10px; 
  }
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 12px; 
  background-color: gray;
  padding: 10px 10px;
  color: #fff;
  border-radius: 100%;
  cursor: pointer;


  &:hover {
    color: #fff;    
  }
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; 
`;

const Sidebar = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: black;
  margin: 10px;
   border-right: 1px solid #ccc;

   @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;
    height: 100vh;           
    background: #fff;         
    transform: translateX(${props => (props.open ? '0' : '-100%')});
    z-index: 3;               
   }
  
`;

const SideBarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50%;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    margin: 5px 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px; 
    display: flex;
    align-items: center;
    gap: 15px; 
    transition: background 0.3s ease, color 0.3s ease;
  }

  a:hover {
    background-color: #f0f0f0; 
    color: #007bff;            
  }
  a.active {
  background-color: #007bff;
  color: white;
}

`;

const MainSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

const Thumbnail = styled.div`
  display: flex;
  flex: 2;
  height: 380px;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #ddd;
  border-radius: 10px;

  @media (max-width: 768px ){
    height:250px;
    cursor: pointer;
    flex: none;
    width: 100%;
  }
`;

const PlayIcon = styled.div`
  font-size: 30px;
  color: black;
  cursor: pointer;
`

const Duration = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #fff;
  background-color: black;
  padding: 3px 6px;
  border-radius: 3px;
`;

const ModulesList = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0;

  h1{
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Card = styled(Link)`
  width: 300px;
  display: flex;
  justify-content: space-between; 
  align-items: center;           
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 7px 15px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  span {
    text-align: justify;
    flex: 1; 
  }

  svg {
    font-size: 18px;
    color: #007bff;
  }

  &:hover {
    background: #f0f8ff;
    border-color: #007bff;
    color: #007bff;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover div {
    display: flex; 
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  min-width: 120px;
  z-index: 1;

  button {
    background: none;
    border: none;
    padding: 10px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
const ToggleButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    z-index: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 1;
`;
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;  
    font-size: 20px;
  }
`;
