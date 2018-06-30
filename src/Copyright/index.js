import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 23px;
`;

const Link = styled(NavLink)`
  display: inline-block;
  margin-right: 7px;
  text-decoration: none;
  line-height: 18px;
  font-size: 13px;
  font-weight: 400;
  color: #718290;
  &:hover {
    color: #0072bb;
    text-decoration: underline;
  }
`;

const Name = styled.span`
  margin-right: 7px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 400;
  color: #718290;
`;

const Copyright = () => (
  <Wrap>
    <Name>
      {'© 2018 Twitter'}
    </Name>
    <Link to="/about">
      {'About'}
    </Link>
    <Link to="/help">
      {'Help Center'}
    </Link>
    <Link to="/terms">
      {'Terms'}
    </Link>
    <Link to="/privacy">
      {'Privacy policy'}
    </Link>
    <Link to="/cookies">
      {'Cookies'}
    </Link>
    <Link to="/ads">
      {'Ads info'}
    </Link>
  </Wrap>
);

export default Copyright;
