import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrap = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: 4px solid #1da1f2;
    padding-top: 4px;
  }
`;

const Caption = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.1px;
  color: #667580;
  ${Wrap}:hover & {
    color: #1da1f2;
  }
`;

const Icon = styled.img`
  margin-right: 4px;
`;

const Tab = (props) => {
  const { caption, src, to } = props;
  return (
    <Wrap to={to}>
      <Icon src={src} alt="" />
      <Caption>
        {caption}
      </Caption>
    </Wrap>
  );
};

export default Tab;
