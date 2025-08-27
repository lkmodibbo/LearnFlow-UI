import styled from 'styled-components';

const LearnContent = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 30px;

  @media (max-width: 768px){
    width: 450px;
    margin: 0 auto;
    /* background-color: red; */
  }
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.2;
`;

const Subheading = styled.h3`
  text-align: center;
  color: #333;
`;

const OrderedList = styled.ol`
  li {
    list-style: none;
    padding: 5px;
  }
`;

const UnorderedList = styled.ul`
  li {
    list-style: none;
    text-align: justify;
    padding: 5px;
  }
`;

const LearnMore = () => {
  return (
    <LearnContent>
      <Title>About LearnFlow</Title>
      <Paragraph>
        LearnFlow is an AI-powered learning platform that helps you develop the
        skills you need to succeed in the modern workforce. We provide
        personalized, career-focused courses tailored to your needs.
      </Paragraph>
      <Subheading>How LearnFlow Works</Subheading>
      <Paragraph>
        Learn at your own pace with AI-powered personalized lessons. Here's how
        it works:
      </Paragraph>
      <OrderedList>
        <li>
          <strong>Choose a Skill:</strong> Pick from our wide range of
          career-focused courses.
        </li>
        <li>
          <strong>Learn in Micro Sessions:</strong> Access short, personalized
          lessons anytime, anywhere.
        </li>
        <li>
          <strong>Apply Your Skills:</strong> Use your new skills to grow your
          career and open new opportunities.
        </li>
      </OrderedList>
      <Subheading>Key Features</Subheading>
      <UnorderedList>
        <li>🎯 Personalized Learning Paths</li>
        <li>📚 Career-Relevant Courses</li>
        <li>⚡ Fast, Micro-Learning Sessions</li>
        <li>🌍 Accessible Anywhere, Anytime</li>
      </UnorderedList>
    </LearnContent>
  );
};

export default LearnMore;
