import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const LogoImage = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate('/')}>
      <LogoText>LearnFlow</LogoText>
    </LogoContainer>
  );
};
export default LogoImage


const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;
const LogoText = styled.h1 `
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    color: #333;
`