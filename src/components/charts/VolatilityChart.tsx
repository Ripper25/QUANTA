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

const Spike = styled.div<{ height: number; left: number }>`
  position: absolute;
  bottom: 0;
  left: ${props => props.left}%;
  width: 2px;
  height: ${props => props.height}%;
  background: ${props => props.theme.colors.primary};
  transform-origin: bottom;
  animation: spikeIn 0.5s ease-out forwards;

  @keyframes spikeIn {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 10px;
    height: 2px;
    background: ${props => props.theme.colors.primary};
  }
`;

const Label = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TimeLabel = styled.div`
  position: absolute;
  bottom: -30px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  font-size: 0.8rem;
  transform: translateX(-50%);
`;

export const VolatilityChart: React.FC = () => {
  // Simulated volatility spikes for Step Index 200
  const spikes = [
    { height: 80, left: 10, time: '1m' },
    { height: 60, left: 25, time: '5m' },
    { height: 90, left: 40, time: '15m' },
    { height: 70, left: 55, time: '30m' },
    { height: 85, left: 70, time: '1h' },
    { height: 75, left: 85, time: '4h' }
  ];

  return (
    <Container>
      <Label>Volatility Profile</Label>
      <ChartContainer>
        {spikes.map((spike, index) => (
          <React.Fragment key={index}>
            <Spike height={spike.height} left={spike.left} />
            <TimeLabel style={{ left: `${spike.left}%` }}>{spike.time}</TimeLabel>
          </React.Fragment>
        ))}
      </ChartContainer>
    </Container>
  );
};
