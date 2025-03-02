import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const BarGroup = styled.div`
  display: flex;
  align-items: flex-end;
  height: 200px;
  gap: ${props => props.theme.spacing.md};
`;

const Bar = styled.div<{ height: number }>`
  flex: 1;
  height: ${props => props.height}%;
  background: ${props => props.theme.colors.primary};
  position: relative;
  transition: height 1s ease-out;

  &::after {
    content: '${props => props.height/2}';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.colors.tertiary};
    font-family: ${props => props.theme.fonts.primary};
  }
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const PositionSizeChart: React.FC = () => {
  // Position size distribution data
  const sizes = [0.1, 1.0, 2.0, 3.0, 4.0, 4.66, 5.0];
  const maxSize = Math.max(...sizes);

  return (
    <Container>
      <Label>Position Size Distribution (Lots)</Label>
      <BarGroup>
        {sizes.map((size, index) => (
          <Bar key={index} height={(size / maxSize) * 100} />
        ))}
      </BarGroup>
    </Container>
  );
};
