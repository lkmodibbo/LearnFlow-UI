import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImage = () => {
 
  return (
     <LogoContainer>
      <StyledLink to="/">
        <LogoText>LearnFlow</LogoText>
      </StyledLink>
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;