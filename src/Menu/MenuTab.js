import React from 'react';
import styled from 'styled-components';
import numbro from 'numbro';
import { NavLink } from 'react-router-dom';

const Caption = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #707e88;
`;

const Tab = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 11px;
  padding: 2px 0 4px 0;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }

  &.active {
    border-bottom: 4px solid #1da1f2;
    color: #1da1f2;
  }
`;

const Count = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #788a98;
  margin-top: 2px;

  ${Tab}:hover &,
  ${Tab}.active & {
    color: #1da1f2;
  }
`;

const MenuTab = (props) => {
  const { count, caption, to } = props;

  const displayedCount = count >= 10000
    ? numbro(count).format({
      thousandSeparated: true,
      average: true,
      mantissa: 1,
    })
    : numbro(count).format({
      thousandSeparated: true,
    });

  return (
    <Tab exact to={to}>
      <Caption>
        {caption}
      </Caption>
      <Count>
        {displayedCount}
      </Count>
    </Tab>
  );
};

export default MenuTab;
