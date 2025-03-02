import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const ChartContainer = styled.div`
  position: relative;
  height: 300px;
  border-left: 2px solid ${props => props.theme.colors.tertiary};
  border-bottom: 2px solid ${props => props.theme.colors.tertiary};
  padding: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
`;

const Line = styled.path`
  fill: none;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const YAxis = styled.div`
  position: absolute;
  left: -60px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.tertiary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.8rem;
`;

const XAxis = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.tertiary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.8rem;
`;

export const EquityChart: React.FC = () => {
  // Sample equity curve data
  const data = [
    { x: 0, y: 20 },
    { x: 10, y: 22 },
    { x: 20, y: 25 },
    { x: 30, y: 28 },
    { x: 40, y: 32 },
    { x: 50, y: 35 },
    { x: 60, y: 40 },
    { x: 70, y: 45 },
    { x: 80, y: 48 },
    { x: 90, y: 50 },
    { x: 100, y: 51.83 }
  ];

  // Create SVG path
  const createPath = () => {
    const points = data.map(d => `${d.x},${300 - d.y * 5}`).join(' L ');
    return `M ${points}`;
  };

  return (
    <Container>
      <Label>Equity Growth ($)</Label>
      <ChartContainer>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <Line d={createPath()} />
        </svg>
        <YAxis>
          <span>50</span>
          <span>40</span>
          <span>30</span>
          <span>20</span>
        </YAxis>
        <XAxis>
          <span>0</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </XAxis>
      </ChartContainer>
    </Container>
  );
};
