import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import more from "./more-icon.svg";

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const LinkCaption = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #707e88;
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
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const MenuTab = styled(NavLink)`
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

const MenuNumber = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #788a98;
  margin-top: 2px;

  ${MenuTab}:hover &,
  ${MenuTab}.active & {
    color: #1da1f2;
  }
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

const Menu = props => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-lg-offset-3">
          <MenuBlock>
            <MenuTab to="/everyinteract">
              <LinkCaption>Tweets</LinkCaption>
              <MenuNumber>8,058</MenuNumber>
            </MenuTab>
            <MenuTab exact to="/">
              <LinkCaption>Following</LinkCaption>
              <MenuNumber>721</MenuNumber>
            </MenuTab>
            <MenuTab exact to="/">
              <LinkCaption>Followers</LinkCaption>
              <MenuNumber>1,815</MenuNumber>
            </MenuTab>
            <MenuTab exact to="/">
              <LinkCaption>Likes</LinkCaption>
              <MenuNumber>460</MenuNumber>
            </MenuTab>
            <MenuTab exact to="/">
              <LinkCaption>Lists</LinkCaption>
              <MenuNumber>2</MenuNumber>
            </MenuTab>
          </MenuBlock>
        </div>
        <div className="col-lg-5 end-lg">
          <FollowButton>Follow</FollowButton>
          <MoreButton />
        </div>
      </div>
    </div>
  </Wrap>
);

export default Menu;
