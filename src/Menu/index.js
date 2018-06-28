import React from 'react';
import styled from 'styled-components';
import more from './more-icon.svg';
import MenuTab from './MenuTab';

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const FollowButton = styled.button`
  border: 1px solid #1da1f2;
  border-radius: 20px;
  box-sizing: border-box;
  background: white;
  cursor: pointer;
  font-weight: 700;
  color: #1da1f2;
  padding: 9px 27px;
  margin: 12px 18px 11px 0;
  &:hover {
    background: #e5f0f8;
  }
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const MoreButton = styled.button`
  background-color: white;
  background-image: url(${more});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  width: 4px;
  height: 14px;
  cursor: pointer;
`;

const Menu = () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-lg-offset-3">
          <MenuBlock>
            <MenuTab to="/everyinteract" count="86058" caption="Tweets" />
            <MenuTab to="/" count="721" caption="Following" />
            <MenuTab to="/" count="1815" caption="Followers" />
            <MenuTab to="/" count="460" caption="Likes" />
            <MenuTab to="/" count="2" caption="Lists" />
          </MenuBlock>
        </div>
        <div className="col-lg-5 end-lg">
          <FollowButton>
            {'Follow'}
          </FollowButton>
          <MoreButton />
        </div>
      </div>
    </div>
  </Wrap>
);

export default Menu;
