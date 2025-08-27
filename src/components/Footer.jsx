import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 50px 20px 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

   @media (max-width: 768px){
    width: 500px;
    /* background-color: red; */
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;

@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  max-width: 100%;
  /* background-color: red; */
}
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;

  h2, h3 {
    color: #4f8ef7;
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #051944;
    margin-bottom: 8px;
  }

`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  

  li {
    margin-bottom: 10px;
    a {
      color: #051944;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid #4f83f7;
  padding-top: 20px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    color: #051944;

    &:hover {
      color: #4f8ef7;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Section>
          <h2>LearnFlow</h2>
          <p>Empowering youth with essential digital skills for the future.</p>
        </Section>

        <Section>
          <h3>Quick Links</h3>
          <FooterLinks>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </FooterLinks>
        </Section>

        <Section>
          <h3>Contact Us</h3>
          <p>Email: lukmansaidmodibbo@gmail.com</p>
          <p>Phone: +234 70457578446</p>
          <p>Location: Abuja, Nigeria</p>
        </Section>
      </FooterContainer>

      <FooterBottom>
        <p>© 2025 LearnFlow. All rights reserve.</p>
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </SocialIcons>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
