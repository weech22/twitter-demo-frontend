import React from "react";
import styled from "styled-components";
import homeIcon from "./home-icon.svg";
import moments from "./moments-icon.svg";
import notifications from "./notifications-icon.svg";
import messages from "./messages-icon.svg";
import logo from "./twitter-logo.svg";
import search from "./search-icon.svg";

const avatar = `${process.env.PUBLIC_URL}/avatar.png`;

const Wrap = styled.header`
  width: 100%;
  background: white;
`;

const TweetButton = styled.button`
  font-size: 14px;
  letter-spacing: 0.01px;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 7px 0;
  padding: 0 16px;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.01px;
  color: #667580;
  margin-top: 1px;
`;

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 4px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 412px;
  margin: 14px 0;
`;

const MainIcon = styled.img`
  margin-top: 16px;
  margin-bottom: 13px;
`;

const SearchInput = styled.input`
  background: #f5f8fa;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 193px 9px;
  border: 1px solid #e6ecf0;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: #687b8a;
  width: 220px;
  margin: 7px 18px 7px 0;
  padding: 9px 0 8px 11px;
`;

const Avatar = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
  margin: 10px 27px 10px 0;
`;

const SearchBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = props => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Navigation>
            <LinkBlock>
              <Icon src={homeIcon} alt="" />
              <Link>Home</Link>
            </LinkBlock>
            <LinkBlock>
              <Icon src={moments} alt="" />
              <Link>Moments</Link>
            </LinkBlock>
            <LinkBlock>
              <Icon src={notifications} alt="" />
              <Link>Notifications</Link>
            </LinkBlock>
            <LinkBlock>
              <Icon src={messages} alt="" />
              <Link>Messages</Link>
            </LinkBlock>
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

export default Header;