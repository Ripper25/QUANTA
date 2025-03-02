import styled from 'styled-components';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

const Card = styled.div`
  background-color: ${props => props.theme.colors.black};
  border: 4px solid ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    &::before {
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    width: 4px;
    height: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: height 0.3s ease;
  }
`;

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.tertiary};
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Value = styled.div`
  font-family: ${props => props.theme.fonts.display};
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
  margin: ${props => props.theme.spacing.md} 0;
`;

const Change = styled.div<{ isPositive?: boolean }>`
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.isPositive ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 1rem;
  
  &::before {
    content: '${props => props.isPositive ? '↑' : '↓'}';
    margin-right: ${props => props.theme.spacing.xs};
  }
`;

export const StatCard = ({ title, value, change, isPositive }: StatCardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
      {change && <Change isPositive={isPositive}>{change}</Change>}
    </Card>
  );
};
