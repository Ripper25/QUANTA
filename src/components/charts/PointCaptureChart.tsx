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

const Point = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}%;
  bottom: ${props => props.y}%;
  width: 6px;
  height: 6px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  transform: translate(-50%, 50%);
`;

const Line = styled.div<{ x1: number; y1: number; x2: number; y2: number }>`
  position: absolute;
  left: ${props => props.x1}%;
  bottom: ${props => props.y1}%;
  width: ${props => Math.sqrt(Math.pow(props.x2 - props.x1, 2) + Math.pow(props.y2 - props.y1, 2))}%;
  height: 2px;
  background: ${props => props.theme.colors.primary};
  transform: rotate(${props => Math.atan2(props.y2 - props.y1, props.x2 - props.x1) * 180 / Math.PI}deg);
  transform-origin: left;
  opacity: 0.5;
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const PointCaptureChart: React.FC = () => {
  const points = [
    { x: 10, y: 20 },
    { x: 25, y: 45 },
    { x: 40, y: 35 },
    { x: 55, y: 60 },
    { x: 70, y: 50 },
    { x: 85, y: 75 }
  ];

  return (
    <Container>
      <Label>Point Capture Efficiency</Label>
      <ChartContainer>
        {points.map((point, i) => (
          <React.Fragment key={i}>
            <Point x={point.x} y={point.y} />
            {i < points.length - 1 && (
              <Line 
                x1={point.x} 
                y1={point.y} 
                x2={points[i + 1].x} 
                y2={points[i + 1].y} 
              />
            )}
          </React.Fragment>
        ))}
      </ChartContainer>
    </Container>
  );
};
