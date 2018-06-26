import React from 'react';
import styled from 'styled-components';
import Tab from './NavTab';
import homeIcon from './home-icon.svg';
import momentsIcon from './moments-icon.svg';
import notificationsIcon from './notifications-icon.svg';
import messagesIcon from './messages-icon.svg';
import logo from './twitter-logo.svg';
import searchIcon from './search-icon.svg';

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
  &:hover {
    background: #0072bb;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const MainIcon = styled.img`
  margin-top: 15px;
  cursor: pointer;
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchInput = styled.input`
  background: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: #687b8a;
  width: 220px;
  margin: 7px 18px 7px 0;
  padding: 8px 0 8px 11px;
`;

const SearchButton = styled.input`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: #f5f8fa;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  position: absolute;
  left: 193px;
  top: 15px;
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

const Header = () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Navigation>
            <Tab src={homeIcon} caption="Home" />
            <Tab src={momentsIcon} caption="Moments" />
            <Tab src={notificationsIcon} caption="Notifications" />
            <Tab src={messagesIcon} caption="Messages" />
          </Navigation>
        </div>
        <div className="col-lg-2 center-lg">
          <MainIcon src={logo} />
        </div>
        <div className="col-lg-4 col-lg-offset-1">
          <SearchBlock>
            <SearchForm>
              <SearchInput placeholder="Search Twitter" />
              <SearchButton type="button" />
            </SearchForm>
            <Avatar src={avatar} />
            <TweetButton>
              {'Tweet'}
            </TweetButton>
          </SearchBlock>
        </div>
      </div>
    </div>
  </Wrap>
);

export default Header;