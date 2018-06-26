import React from 'react';
import styled from 'styled-components';
import TrendLine from './TrendLine';

const trends = [
  { title: '#BringYourDogToWorkDay', subTitle: '' },
  { title: '#FridayFeeling', subTitle: '12.1K Tweets' },
  {
    title: '#BrexitAnniversary',
    subTitle: 'It’s one year since the UK voted to leave the European Union',
  },
  { title: 'HMS Queen Elizabeth', subTitle: '1,036 Tweets' },
  { title: 'Joe Budden', subTitle: '1,036 Tweets' },
  { title: 'Trident', subTitle: '6,136 Tweets' },
];

const Wrap = styled.div`
  background: white;
  margin-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 47px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;

const Action = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Dot = styled.span`
  font-size: 10px;
`;

const TrendSection = styled.div`
  margin-top: 14px;
`;

const Separator = () => (
  <Dot>
    {' • '}
  </Dot>
);

const Trends = () => (
  <Wrap>
    <Title>
      {'United Kingdom Trends'}
    </Title>
    <Separator />
    <Action href="#">
      {'Change'}
    </Action>
    <TrendSection>
      {trends.map(trend => (
        <TrendLine subTitle={trend.subTitle}>
          {trend.title}
        </TrendLine>
      ))}
    </TrendSection>
  </Wrap>
);

export default Trends;