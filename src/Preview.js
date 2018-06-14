import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  display: flex;
  margin-right: 11px;
  margin-bottom: 23px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 126px;
  height: 126px;
`;
const Title = styled.h2`
  font-family: HelveticaNeue;
  line-height: 22px;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #000000;
  margin: 0;
`;
const Description = styled.span`
  font-family: HelveticaNeue;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;

  color: #000000;
`;
const Link = styled.a`
  text-decoration: none;
  font-family: HelveticaNeue;
  font-size: 15px;
  letter-spacing: -0.5px;
  color: #97a6b1;
  font-weight: 200;
`;

const TextBlock = styled.div`
  padding-left: 9px;
  padding-top: 11px;
  padding-bottom: 8px;
`;

class Preview extends Component {
  render() {
    return (
      <Wrap>
        <Image src={this.props.image} />

        <TextBlock>
          <Title>{this.props.title}</Title>
          <Description>{this.props.children}</Description>
          <Link>{this.props.link}</Link>
        </TextBlock>
      </Wrap>
    );
  }
}

export default Preview;
