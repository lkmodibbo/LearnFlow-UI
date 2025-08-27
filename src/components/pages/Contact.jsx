import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  background-color: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #021A42;
  }

  p {
    font-size: 20px;
    margin-bottom: 40px;
    color: #555;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

const Info = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    margin-bottom: 30px;
    color: #4f8ef7;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #333;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;

  input {
    padding: 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
  }

  textarea {
    outline: none;
    font-size: 18px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  button {
    padding: 15px;
    background-color: #4f8ef7;
    border: none;
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #3e7ec7;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below or reach out directly.</p>

        <Grid>
          <Info>
            <h3>Get in Touch</h3>
            <p>Email: support@learnflow.com</p>
            <p>Phone: +234 704 575 8446</p>
            <p>Location: Abuja, Nigeria</p>
          </Info>

          <Form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </Form>
        </Grid>
      </Container>
    </Section>
  );
};

export default Contact;
