import styled from 'styled-components';
import { StatCard } from './StatCard';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.tertiary};
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  color: ${props => props.theme.colors.black};
  font-size: 2rem;
  margin: ${props => props.theme.spacing.xl} 0;
  text-transform: uppercase;
  border-left: 8px solid ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.spacing.md};
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.secondary};
    margin-top: ${props => props.theme.spacing.sm};
  }
`;

const InfoBox = styled.div`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.tertiary};
  padding: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
  font-family: ${props => props.theme.fonts.primary};
  border-right: 8px solid ${props => props.theme.colors.primary};
  
  strong {
    color: ${props => props.theme.colors.primary};
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: ${props => props.theme.spacing.md} 0;
    
    li {
      margin: ${props => props.theme.spacing.sm} 0;
      &::before {
        content: '>';
        color: ${props => props.theme.colors.primary};
        margin-right: ${props => props.theme.spacing.sm};
      }
    }
  }
`;

export const Dashboard = () => {
  return (
    <Container>
      <SectionTitle>Performance Metrics</SectionTitle>
      <Grid>
        <StatCard 
          title="Win Rate" 
          value="33.93%" 
          change="Consistent" 
          isPositive={true}
        />
        <StatCard 
          title="Total Trades" 
          value="9,600" 
          change="+1,200 this month" 
          isPositive={true}
        />
        <StatCard 
          title="Points/Day" 
          value="7.8" 
          change="Above target" 
          isPositive={true}
        />
        <StatCard 
          title="Max Drawdown" 
          value="$6.92" 
          change="Historical low" 
          isPositive={true}
        />
      </Grid>

      <SectionTitle>Strategy Characteristics</SectionTitle>
      <InfoBox>
        <strong>Synthetic Index Advantages</strong>
        <ul>
          <li>Algorithmic price generation</li>
          <li>No market participant adaptation</li>
          <li>Consistent statistical properties</li>
          <li>Immune to external market forces</li>
        </ul>
        <strong>Key Metrics</strong>
        <ul>
          <li>Average position size: 4.66 lots</li>
          <li>Point capture efficiency: 0.073</li>
          <li>Commission impact: 0.00024%</li>
        </ul>
      </InfoBox>
    </Container>
  );
};
