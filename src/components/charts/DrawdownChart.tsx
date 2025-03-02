import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const ChartContainer = styled.div`
  position: relative;
  height: 200px;
  border-left: 2px solid ${props => props.theme.colors.tertiary};
  border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  padding: ${props => props.theme.spacing.md};
`;

const Bar = styled.div<{ height: number }>`
  position: absolute;
  bottom: 0;
  width: 30px;
  height: ${props => props.height}%;
  background: ${props => props.theme.colors.primary};
  opacity: 0.8;
  transform: translateX(-50%);

  &::after {
    content: '$${props => (props.height / 10).toFixed(2)}';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.theme.colors.tertiary};
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.8rem;
  }
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const DrawdownChart: React.FC = () => {
  const drawdowns = [
    { position: 20, value: 69.2 }, // $6.92
    { position: 40, value: 45.0 }, // $4.50
    { position: 60, value: 32.5 }, // $3.25
    { position: 80, value: 21.0 }  // $2.10
  ];

  return (
    <Container>
      <Label>Maximum Drawdowns ($)</Label>
      <ChartContainer>
        {drawdowns.map((dd, index) => (
          <Bar 
            key={index} 
            style={{ left: `${dd.position}%` }}
            height={dd.value}
          />
        ))}
      </ChartContainer>
    </Container>
  );
};
