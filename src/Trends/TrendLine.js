import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Trend = styled.a`
  text-decoration: none;
  font-weight: 600;
  line-height: 20px;
  font-size: 15px;
  color: #1da1f2;
  ${Wrap}:hover & {
    text-decoration: underline;
  }
`;

const SubTitle = styled.span`
  line-height: 17px;
  font-size: 12px;
  color: #657786;
  font-weight: 200;
  margin-top: 4px;
`;

const TrendLine = (props) => {
  const { children, subTitle } = props;

  return (
    <Wrap>
      <Trend href="#">
        {children}
      </Trend>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </Wrap>
  );
};

export default TrendLine;