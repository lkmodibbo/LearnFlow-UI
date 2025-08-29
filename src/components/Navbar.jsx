import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../components/LogoImage';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <NavContainer>
      <LeftSection>
        <LogoImage />
        <NavLinks className={showMenu ? 'show' : ''}>
          <StyledLink to="/">Home</StyledLink>
          <Dropdown onClick={() => setShowDropdown(prev => !prev)}>
            <DropdownToggle>Courses ▾</DropdownToggle>
            {showDropdown && (
              <DropdownMenu>
                <StyledLink 
                  to="/courses/gmail" 
                  onClick={() => setShowDropdown(false)}>
                  Gmail Basics
                </StyledLink>
                <StyledLink 
                  to="/courses/google-docs" 
                  onClick={() => setShowDropdown(false)}>
                  Google Docs
                </StyledLink>
                <StyledLink 
                  to="/courses/internet-research" 
                  onClick={() => setShowDropdown(false)}>
                  Internet Research
                </StyledLink>
                <StyledLink 
                  to="/courses/intro-to-ai" 
                  onClick={() => setShowDropdown(false)}>
                  Intro to AI Tools
                </StyledLink>
                <StyledLink 
                  to="/courses/file-storage" 
                  onClick={() => setShowDropdown(false)}>
                  File Storage
                </StyledLink>
                <StyledLink 
                  to="/courses/online-safety" 
                  onClick={() => setShowDropdown(false)}>
                  Online Safety
                </StyledLink>
              </DropdownMenu>
            )}
          </Dropdown>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavLinks>
      </LeftSection>
      <RightSection>
        <LoginButton onClick={() => navigate('./login')}>
          <span className='login-text'>Login</span>
          <FaSignInAlt style={{ marginLeft: '18px' }} />
        </LoginButton>
        <MenuToggle onClick={toggleMenu}>{showMenu ? 'X' : '☰'}</MenuToggle>
      </RightSection>
    </NavContainer>
  );
};

export default Navbar;






export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  @media (max-width: 768px) {
    min-width: 500px;
    margin: 10px;
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  &.show {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    position: fixed;
    left: 15px;
    top: 75px;
    flex-direction: column;
    width: 95%;
    gap: 10px;
    font-size: 24px;
    background-color: #fff;
    color: #333;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 30px;
  text-decoration: none;
  font-size: 20px;
  color: #333;
  text-transform: capitalize;
  transition: color 0.3s ease;

  &:hover {
    color: #4f8ef7;
  }

  @media (max-width: 768px) {
    font-weight: bold;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: end;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const LoginButton = styled.button`
  background-color: black;
  padding: 15px 30px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin: 0px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownToggle = styled.span`
  font-size: 20px;
  color: #333;
  padding: 10px;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  max-width: 180px;
  background-color: #fff;
  border-radius: 12px;
  z-index: 100;
  padding: 10px;
  min-width: 180px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  a {
    padding: 10px;
    font-size: 16px;
    color: #333;
    text-decoration: none;
    transition: background 0.3s ease;
    border-radius: 10px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;