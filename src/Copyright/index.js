import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 23px;
`;

const Link = styled.a`
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
    <Link href="#">
      {'About'}
    </Link>
    <Link href="#">
      {'Help Center'}
    </Link>
    <Link href="#">
Terms
    </Link>
    <Link href="#">
      {'Privacy policy'}
    </Link>
    <Link href="#">
      {'Cookies'}
    </Link>
    <Link href="#">
      {'Ads info'}
    </Link>
  </Wrap>
);

export default Copyright;
