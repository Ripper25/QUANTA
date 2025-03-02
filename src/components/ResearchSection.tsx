import React from 'react';
import styled from 'styled-components';
import { WinRateChart } from './charts/WinRateChart';
import { EquityChart } from './charts/EquityChart';
import { PositionSizeChart } from './charts/PositionSizeChart';
import { PointCaptureChart } from './charts/PointCaptureChart';
import { DrawdownChart } from './charts/DrawdownChart';
import { VolatilityChart } from './charts/VolatilityChart';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.tertiary};
  min-height: 100vh;
`;

const Section = styled.section`
  margin: ${props => props.theme.spacing.xxl} 0;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 4rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-transform: uppercase;
  border-left: 8px solid ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.spacing.lg};
`;

const SubTitle = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.5rem;
  color: ${props => props.theme.colors.black};
  margin: ${props => props.theme.spacing.xl} 0;
  text-transform: uppercase;
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  padding-bottom: ${props => props.theme.spacing.sm};
`;

const Text = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: ${props => props.theme.spacing.lg} 0;
  color: ${props => props.theme.colors.black};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => props.theme.spacing.lg} 0;
  
  li {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.black};
    margin: ${props => props.theme.spacing.md} 0;
    padding-left: ${props => props.theme.spacing.lg};
    position: relative;
    
    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const MetricBox = styled.div`
  background: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing.xl};
  transform: translateY(0);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h4 {
    font-family: ${props => props.theme.fonts.display};
    color: ${props => props.theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  p {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.tertiary};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const ResearchSection: React.FC = () => {
  return (
    <Container>
      <Title>Synthetic Index High-Frequency Trading</Title>
      
      <Section>
        <SubTitle>Abstract</SubTitle>
        <Text>
          This research paper presents a comprehensive analysis of a high-frequency trading 
          strategy specifically designed for synthetic indices. Through extensive backtesting 
          and live market analysis, we demonstrate consistent profitability and remarkable 
          capital efficiency across varying market conditions.
        </Text>
      </Section>

      <Section>
        <SubTitle>Introduction</SubTitle>
        <Text>
          Synthetic indices represent a unique class of trading instruments with 
          deterministic price generation algorithms. Unlike traditional markets, these 
          indices maintain consistent statistical properties and are immune to market 
          participant behavior, making them ideal candidates for algorithmic trading 
          strategies.
        </Text>
        <List>
          <li>No market participant adaptation</li>
          <li>Consistent statistical properties</li>
          <li>Immune to external market forces</li>
          <li>No volume/liquidity constraints</li>
        </List>
      </Section>

      <Section>
        <SubTitle>Step Index 200 Characteristics</SubTitle>
        <Text>
          The Step Index 200 is a synthetic index with unique properties that make it 
          particularly suitable for high-frequency trading strategies. Its price movements 
          are governed by a deterministic algorithm that creates predictable volatility 
          patterns.
        </Text>
        <VolatilityChart />
        <Grid>
          <MetricBox>
            <h4>200</h4>
            <p>Volatility Index</p>
          </MetricBox>
          <MetricBox>
            <h4>0.1</h4>
            <p>Minimum Tick Size</p>
          </MetricBox>
          <MetricBox>
            <h4>24/7</h4>
            <p>Trading Hours</p>
          </MetricBox>
          <MetricBox>
            <h4>1:1</h4>
            <p>Leverage Ratio</p>
          </MetricBox>
        </Grid>
        <Text>
          Key characteristics of Step Index 200:
        </Text>
        <List>
          <li>Higher volatility compared to other synthetic indices</li>
          <li>Price-only data feed with no volume information</li>
          <li>Tick-by-tick data availability</li>
          <li>Consistent statistical distribution</li>
          <li>Fixed tick size of 0.1 points</li>
          <li>Continuous trading without gaps</li>
          <li>No overnight positions required</li>
          <li>Immune to market manipulation</li>
        </List>
        <Text>
          These characteristics create an ideal environment for our high-frequency 
          trading approach, allowing for precise entry and exit points while maintaining 
          consistent risk parameters. The absence of volume data is compensated by the 
          deterministic nature of price movements.
        </Text>
      </Section>

      <Section>
        <SubTitle>Methodology</SubTitle>
        <Text>
          Our strategy employs a high-frequency approach optimized for the Step Index 200. 
          The implementation focuses on rapid position entry and exit, leveraging the 
          index's inherent volatility while maintaining strict risk management parameters.
        </Text>
        
        <div style={{
          margin: '2rem 0',
          padding: '1.5rem',
          background: 'rgba(255, 111, 29, 0.1)',
          border: '2px solid #FF6F1D'
        }}>
          <h4 style={{
            color: '#1A1A1A',
            fontFamily: '"Impact", "Arial Black", sans-serif',
            marginBottom: '1rem'
          }}> Proprietary Information Notice</h4>
          <p style={{
            color: '#1A1A1A',
            fontFamily: '"Courier New", monospace'
          }}>
            Specific implementation details, including entry/exit conditions, timing algorithms, 
            and position sizing calculations, are intentionally omitted as they constitute 
            protected intellectual property. This strategy represents significant R&D investment 
            and maintains its edge through non-public execution methods.
          </p>
        </div>

        <PositionSizeChart />
        <Text>
          Position sizing is dynamically adjusted based on the Kelly Criterion, with an 
          average position size of 4.66 lots. This approach ensures optimal capital 
          utilization while maintaining risk control.
        </Text>
        
        <Text>
          While specific triggers remain proprietary, the strategy's framework includes:
        </Text>
        <List>
          <li>Price action-based entry/exit signals</li>
          <li>Dynamic position sizing algorithm</li>
          <li>Automated risk management system</li>
          <li>High-frequency execution engine</li>
        </List>
        
        <Text>
          The strategy's effectiveness stems from its ability to identify and exploit 
          the deterministic patterns inherent in the Step Index 200, while the specific 
          implementation details remain confidential to preserve the strategy's competitive 
          advantage.
        </Text>
      </Section>

      <Section>
        <SubTitle>Performance Analysis</SubTitle>
        <Text>
          The strategy demonstrates exceptional performance across multiple timeframes, 
          with consistent growth and minimal drawdowns. Our analysis covers both short-term 
          and long-term performance metrics.
        </Text>
        <EquityChart />
        <Grid>
          <MetricBox>
            <h4>9,600</h4>
            <p>Total Trades</p>
          </MetricBox>
          <MetricBox>
            <h4>$31,826</h4>
            <p>Total Profit</p>
          </MetricBox>
          <MetricBox>
            <h4>7.8</h4>
            <p>Points/Day</p>
          </MetricBox>
          <MetricBox>
            <h4>0.073</h4>
            <p>Point Capture Efficiency</p>
          </MetricBox>
        </Grid>
      </Section>

      <Section>
        <SubTitle>Win Rate Analysis</SubTitle>
        <Text>
          A remarkable finding is the consistency in win rate across different timeframes, 
          suggesting robust underlying mechanics that maintain effectiveness regardless of 
          market conditions.
        </Text>
        <WinRateChart shortTerm={33.33} longTerm={33.93} />
        <Text>
          The strategy maintains a consistent win rate of approximately 33.93% over the 
          4-month period, with minimal deviation in the 24-hour analysis at 33.33%. This 
          stability is a key indicator of the strategy's reliability.
        </Text>
      </Section>

      <Section>
        <SubTitle>Risk Management</SubTitle>
        <Text>
          Our risk management framework incorporates multiple layers of protection, 
          including position sizing limits, drawdown controls, and automated exit 
          mechanisms.
        </Text>
        <DrawdownChart />
        <Text>
          Maximum drawdown has been contained to $6.92, representing excellent risk 
          control given the strategy's profit potential. The drawdown profile shows 
          a consistent pattern of quick recovery and minimal capital impairment.
        </Text>
      </Section>

      <Section>
        <SubTitle>Point Capture Analysis</SubTitle>
        <Text>
          The strategy's effectiveness in capturing price movements is measured through 
          our point capture efficiency metric, which quantifies the percentage of 
          available price movement successfully captured.
        </Text>
        <PointCaptureChart />
        <Text>
          With a point capture efficiency of 0.073, the strategy demonstrates its 
          ability to effectively monetize price movements while maintaining risk 
          parameters.
        </Text>
      </Section>

      <Section>
        <SubTitle>Transaction Cost Analysis</SubTitle>
        <Text>
          One of the strategy's key advantages is its extremely low transaction cost 
          profile, enabled by the synthetic nature of the underlying instrument.
        </Text>
        <Grid>
          <MetricBox>
            <h4>$2.40</h4>
            <p>Commission per $100k</p>
          </MetricBox>
          <MetricBox>
            <h4>0.00024%</h4>
            <p>Total Impact</p>
          </MetricBox>
          <MetricBox>
            <h4>$0.0768</h4>
            <p>4-Month Cost</p>
          </MetricBox>
          <MetricBox>
            <h4>$0.000008</h4>
            <p>Cost per Trade</p>
          </MetricBox>
        </Grid>
      </Section>

      <Section>
        <SubTitle>Strategy Longevity</SubTitle>
        <Text>
          Unlike traditional market strategies that expire due to changing market 
          conditions, this synthetic index strategy demonstrates remarkable durability 
          due to its algorithmic nature and immunity to market evolution.
        </Text>
        <List>
          <li>Consistent win rates across timeframes</li>
          <li>Stable point capture metrics</li>
          <li>Reliable execution patterns</li>
          <li>Immunity to market evolution</li>
        </List>
        <Text>
          The strategy's performance characteristics have remained stable throughout 
          the testing period, with no degradation in key metrics. This stability is 
          attributed to the unchanging nature of the synthetic index's price generation 
          algorithm.
        </Text>
      </Section>

      <Section>
        <SubTitle>Conclusion</SubTitle>
        <Text>
          The research demonstrates the viability and effectiveness of our high-frequency 
          trading approach on synthetic indices. Key findings include:
        </Text>
        <List>
          <li>Consistent profitability with minimal drawdown</li>
          <li>Stable win rate across timeframes</li>
          <li>Negligible transaction costs</li>
          <li>Robust strategy longevity</li>
        </List>
        <Text>
          These results suggest that synthetic indices, particularly the Step Index 200, 
          represent an ideal environment for algorithmic trading strategies, offering 
          consistent opportunities without the complexities of traditional market evolution.
        </Text>
      </Section>
    </Container>
  );
};
