import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  display: flex;
  margin: 0 11px 23px 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 126px;
  height: 126px;
`;
const Title = styled.h2`
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.2px;
  color: #000000;
  margin: 0;
`;
const Description = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #000000;
`;
const Link = styled.a`
  text-decoration: none;
  font-size: 15px;
  letter-spacing: -0.5px;
  color: #97a6b1;
  font-weight: 200;
`;

const TextBlock = styled.div`
  padding: 11px 0 8px 9px;
`;

const Preview = props => (
  <Wrap>
    <Image src={props.image} />
    <TextBlock>
      <Title>{props.title}</Title>
      <Description>{props.children}</Description>
      <Link>{props.link}</Link>
    </TextBlock>
  </Wrap>
);

export default Preview;
