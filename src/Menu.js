import React, { Component } from "react";
import styled from "styled-components";
import more from "./more-icon.svg";

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const MenuLink = styled.a`
  font-family: HelveticaNeue;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.00846154px;
  color: #707e88;
`;

const FollowButton = styled.button`
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  border-radius: 100px;
  background: white;
  cursor: pointer;
  font-weight: 700;
  color: #1da1f2;
  padding: 9px 27px;
  margin-top: 12px;
  margin-bottom: 11px;
  margin-right: 18px;
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const MenuTab = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 11px;
  cursor: pointer;
  border-bottom: ${props => (props.active ? "4px solid #1DA1F2" : "none")};
`;

const MenuNumber = styled.span`
  font-family: HelveticaNeue;
  line-height: 21px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.00846154px;
  color: ${props => (props.active ? "#1da1f2" : "#788a98")};
`;

const MoreButton = styled.button`
  appearance: none;
  background-image: url(${more});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: white;
  width: 4px;
  height: 14px;
  cursor: pointer;
`;

class Menu extends Component {
  render() {
    return (
      <Wrap>
        <div className="container">
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-4">
              <MenuBlock>
                <MenuTab active>
                  <MenuLink>Tweets</MenuLink>
                  <MenuNumber active>8,058</MenuNumber>
                </MenuTab>
                <MenuTab>
                  <MenuLink>Following</MenuLink>
                  <MenuNumber>721</MenuNumber>
                </MenuTab>
                <MenuTab>
                  <MenuLink>Followers</MenuLink>
                  <MenuNumber>1,815</MenuNumber>
                </MenuTab>
                <MenuTab>
                  <MenuLink>Likes</MenuLink>
                  <MenuNumber>460</MenuNumber>
                </MenuTab>
                <MenuTab>
                  <MenuLink>Lists</MenuLink>
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
  }
}

export default Menu;
