import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
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
`;

const SubTitle = styled.span`
  line-height: 17px;
  font-size: 12px;
  color: #657786;
  font-weight: 200;
  margin-top: 4px;
`;

const TrendLine = props => (
  <Wrap>
    <Trend href="#">{props.children}</Trend>
    <SubTitle>{props.subTitle}</SubTitle>
  </Wrap>
);

export default TrendLine;
