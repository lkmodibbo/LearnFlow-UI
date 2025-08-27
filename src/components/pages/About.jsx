import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.div`
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #021A42;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #444;
  }

  .mission {
    font-size: 19px;
    padding: 15px;
    border-left: 5px solid #4f8ef7;
    border-radius: 8px;
    font-weight: 500;
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Text>
          <h1>About LearnFlow</h1>
          <p>
            LearnFlow is a digital microlearning platform designed to equip Nigerian students and young people with essential digital skills, from creating emails to using AI tools.
          </p>
          <p>
            We noticed many students in Nigeria struggle with basic computer literacy needed for university, jobs, or even filling JAMB forms. LearnFlow simplifies that.
          </p>
          <p className="mission">
            <strong>Our Mission:</strong> Bridge the digital divide by delivering short, accessible, career-relevant lessons for every learner.
          </p>
        </Text>
      </Container>
    </Section>
  )
}

export default About;
