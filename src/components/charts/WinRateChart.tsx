import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
  position: relative;
`;

const BarContainer = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.tertiary};
  position: relative;
  margin: ${props => props.theme.spacing.lg} 0;
`;

const Bar = styled.div<{ percentage: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${props => props.theme.colors.primary};
  transition: width 1s ease-out;

  &::after {
    content: '${props => props.percentage}%';
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${props => props.theme.fonts.display};
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

interface WinRateChartProps {
  shortTerm: number;
  longTerm: number;
}

export const WinRateChart: React.FC<WinRateChartProps> = ({ shortTerm, longTerm }) => {
  return (
    <Container>
      <Label>24-Hour Win Rate</Label>
      <BarContainer>
        <Bar percentage={shortTerm} />
      </BarContainer>
      <Label>4-Month Win Rate</Label>
      <BarContainer>
        <Bar percentage={longTerm} />
      </BarContainer>
    </Container>
  );
};
