import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translate(0);
  }
  2% {
    clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
    transform: translate(-2px);
  }
  4% {
    clip-path: polygon(0 10%, 100% 10%, 100% 75%, 0 75%);
    transform: translate(2px);
  }
  6% {
    clip-path: polygon(0 40%, 100% 40%, 100% 55%, 0 55%);
    transform: translate(-1px);
  }
  8% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translate(0);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translate(0);
  }
`;

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.xl};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.primary} 20px,
      transparent 20px,
      transparent 40px
    );
  }
`;

const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 40px;
    height: 40px;
    border-left: 4px solid ${props => props.theme.colors.primary};
    border-top: 4px solid ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    border-right: 4px solid ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 8rem;
  color: ${props => props.theme.colors.tertiary};
  margin: 0;
  text-align: center;
  letter-spacing: -4px;
  line-height: 1;
  position: relative;
  text-shadow: 
    4px 4px 0 ${props => props.theme.colors.primary},
    8px 8px 0 rgba(255, 111, 29, 0.3);
  animation: ${glitch} 4s infinite;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.tertiary};
  text-align: center;
  margin-top: ${props => props.theme.spacing.lg};
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 111, 29, 0.1) 10px,
      rgba(255, 111, 29, 0.1) 20px
    );
    z-index: -1;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${props => props.theme.fonts.display};
  font-size: 20rem;
  color: rgba(255, 111, 29, 0.03);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundText>QUANTA</BackgroundText>
      <TitleContainer>
        <Title>QUANTA</Title>
        <Subtitle>Synthetic Index Strategy</Subtitle>
      </TitleContainer>
    </HeaderContainer>
  );
};
