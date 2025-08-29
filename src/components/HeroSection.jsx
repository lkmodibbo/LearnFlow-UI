import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import whyImage from '../assets/Hero-image.webp';
import GmailImage from '../assets/Gmail_basics.png';
import GoogleDocsImage from '../assets/Google_docs.jpeg';
import AIImage from '../assets/AI-Tools.jpeg';
import InternetImage from '../assets/internet_research.jpeg';
import DriveImage from '../assets/file_storage.png';
import OnlineImage from '../assets/Online_safety.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('./learnMore');
  };

  return (
    <HeroContainer>
      <Content>
        <h1>Unlock Your Future with AI-powered Learning</h1>
        <p>
          Learn the skills that matter today. Personalized courses designed to make you career-ready, powered by AI. 
          <span onClick={handleLearnMore}>Learn more</span>
        </p>
        <CTAButtons>
          <ButtonPrimary onClick={() => navigate('./login')}>Get Started</ButtonPrimary>
        </CTAButtons>
      </Content>

      <SubText>
        Join the AI revolution and build a career that lasts. Discover the possibilities with our personalized learning approach.
      </SubText>

      <SectionTitle>What You Will Learn</SectionTitle>
      <CoursesGrid>
        {[
          { 
            img: GmailImage, 
            title: 'Gmail Basics', 
            desc: 'Master how to send emails, manage inboxes, and use attachments professionally.'
           },
          { 
            img: GoogleDocsImage, 
            title: 'Google Docs Mastery', 
            desc: 'Learn to create, edit, and collaborate on documents like a pro.' 
          },
          { 
            img: InternetImage, 
            title: 'Internet Research Skills', 
            desc: 'Develop smart strategies for finding reliable information online quickly.' 
          },
          { 
            img: AIImage, 
            title: 'Introduction to AI Tools', 
            desc: 'Discover how AI like ChatGPT can boost your learning and productivity.' 
          },
          { 
            img: DriveImage, 
            title: 'Google Drive & File Storage', 
            desc: 'Learn how to organize, store, and access files anywhere, safely.' 
          },
          { 
            img: OnlineImage, 
            title: 'Online Safety & Security', 
            desc: 'Protect your accounts and stay safe while navigating the internet.' 
          },
          
        ].map((course, i) => (
          <CourseCard key={i}>
            <CourseImage src={course.img} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <EnrollButton onClick={() => navigate('/login')}>Enroll</EnrollButton>
          </CourseCard>
        ))}
      </CoursesGrid>

      <HowItWorks>
        <HowContainer>
          <h2>How LearnFlow Works</h2>
          <p className="how-description">
            Learn at your own pace with AI-powered personalized lessons. Just 3 simple steps to start your learning journey!
          </p>
          <StepsGrid>
            <StepCard>
              <StepIcon>📝</StepIcon>
              <h3>1. Choose a Skill</h3>
              <p>Pick from our wide range of career focused courses</p>
            </StepCard>
            <StepCard>
              <StepIcon>⚡</StepIcon>
              <h3>2. Learn in Micro Sessions</h3>
              <p>Access short, personalized lessons anywhere, anytime.</p>
            </StepCard>
            <StepCard>
              <StepIcon>🚀</StepIcon>
              <h3>3. Apply Your Skills</h3>
              <p>Use your new skills to grow your career and opportunities.</p>
            </StepCard>
          </StepsGrid>
        </HowContainer>
      </HowItWorks>

      <WhyChooseUs>
        <WhyContainer>
          <WhyText>
            <h2>Why Choose LearnFlow ?</h2>
            <p>
              At LearnFlow, we believe in making education simple, practical, and accessible. Our AI-powered platform adapts to your learning needs and helps you build skills that matter.
            </p>
            <WhyList>
              <li>🎯 Personalized Learning Paths</li>
              <li>📚 Career-Relevant Courses</li>
              <li>⚡ Fast, Micro-Learning Sessions</li>
              <li>🌍 Accessible Anywhere, Anytime</li>
            </WhyList>
          </WhyText>
          <WhyImage src={whyImage} alt="students learning with Technology" />
        </WhyContainer>
      </WhyChooseUs>
    </HeroContainer>
  );
};

export default HeroSection;







const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #f8f8f8;


  @media  (max-width: 768px) {
    /* background-color: red; */
    width: 460px;
    align-items: center;
    justify-content: center
  }
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: #021A42;

  h1 {
    margin-bottom: 20px;
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    line-height: 1.6;

    span {
      color: #021A42;
      font-style: italic;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonPrimary = styled.button`
  width: 135px;
  padding: 12px 15px;
  font-size: 20px;
  font-weight: lighter;
  border-radius: 5px;
  margin: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SubText = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin: 30px 0;
`;

const SectionTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const CoursesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    /* background-color: red; */
    padding: 20px;
    width: 100%;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CourseCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;


  @media (max-width: 768px){
    /* background-color: red; */
    width: 200px;
    height: fit-content;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (max-width: 768px){
    width: 180px;
    height: 80px;
  }
`;

const EnrollButton = styled.button`
  padding: 10px 25px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const HowItWorks = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const HowContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .how-description {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;


  @media (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(1,1fr);
  }
`;

const StepCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-10px);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #021A42;
  }

  p {
    font-size: 16px;
    color: #555;
  }
`;

const StepIcon = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
  color: black;
`;

const WhyChooseUs = styled.section`
  padding: 60px 20px;
`;

const WhyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

const WhyText = styled.div`
  flex: 1;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #021A42;
  }

  p {
    font-size: 20px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const WhyList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background-color: #f8f8f8;
    margin-bottom: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 18px;
    color: #021A42;
    font-weight: 500;
  }
`;

const WhyImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: 12px;
`;

