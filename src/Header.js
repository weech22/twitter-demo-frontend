import React, { Component } from "react";
import styled from "styled-components";
import home from "./home-icon.svg";
import moments from "./moments-icon.svg";
import notifications from "./notifications-icon.svg";
import messages from "./messages-icon.svg";
import logo from "./twitter-logo.svg";
import search from "./search-icon.svg";
import avatar from "./avatar.png";

const Wrap = styled.header`
  width: 100%;
  background: white;
`;

const TweetButton = styled.button`
  font-family: HelveticaNeue;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.0107692px;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 7px;
  padding-left: 16.7px;
  padding-right: 15.9px;
`;

const NavLink = styled.a`
  font-family: HelveticaNeue;
  text-decoration: none;
  cursor: pointer;
  line-height: normal;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.01px;
  color: #667580;
  margin-top: 1px;
`;

const NavLinkBlock = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  margin-right: 4.2px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 412px;
  margin-top: 14px;
  margin-bottom: 14px;
`;

const MainIcon = styled.img`
  margin-top: 16px;
  margin-bottom: 12.5px;
`;

const SearchInput = styled.input`
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.00923077px;
  color: #687b8a;
  padding-left: 11px;
  width: 220px;
  padding-top: 9px;
  padding-bottom: 8px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 193px 9px;
  margin-right: 17.88px;
  margin-top: 6px;
  margin-bottom: 7px;
`;

const Avatar = styled.img`
  cursor: pointer;
  width: 26.24px;
  height: 26.24px;
  margin-top: 8.94px;
  margin-bottom: 9.82px;
  margin-right: 27.32px;
`;

const SearchBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Header extends Component {
  render() {
    return (
      <Wrap>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Navigation>
                <NavLinkBlock>
                  <NavIcon src={home} alt="" />
                  <NavLink>Home</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={moments} alt="" />
                  <NavLink>Moments</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={notifications} alt="" />
                  <NavLink>Notifications</NavLink>
                </NavLinkBlock>
                <NavLinkBlock>
                  <NavIcon src={messages} alt="" />
                  <NavLink>Messages</NavLink>
                </NavLinkBlock>
              </Navigation>
            </div>
            <div className="col-lg-2 center-lg">
              <MainIcon src={logo} />
            </div>
            <div className="col-lg-5">
              <SearchBlock>
                <SearchInput placeholder="Search Twitter" />
                <Avatar src={avatar} />
                <TweetButton>Tweet</TweetButton>
              </SearchBlock>
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default Header;
