import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import tickIcon from './tick-icon.svg';
import crossIcon from './cross-icon.svg';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 16px;
  padding-top: 11px;
`;

const Avatar = styled.img`
  cursor: pointer;
`;

const ProfileName = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #657786;
  font-weight: 200;
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  cursor: pointer;
  background: white;
  padding: 6px 22px;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #1da1f2;
  align-self: flex-start;
  &:hover {
    background: #e5f0f8;
  }
`;

const Tick = styled.img`
  margin-left: 5px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 1px;
  top: 15px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: none;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center center;
`;

const NameSection = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 9px;
  max-width: 92%;
  &:hover {
    cursor: pointer;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AvatarSection = styled.div`
  margin-right: 10px;
`;

const Name = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #333333;
  font-weight: 700;
  margin-left: 2px;
  flex-shrink: 0;
  ${NameSection}:hover & {
    text-decoration: underline;
    color: #0072bb;
  }
`;

const ProfileCard = (props) => {
  const {
    avatar, name, username, isVerified,
  } = props;

  return (
    <Wrap>
      <AvatarSection>
        <Avatar src={avatar} />
      </AvatarSection>
      <MainSection>
        <NameSection to={username}>
          <Name>
            {name}
          </Name>
          {isVerified && <Tick src={tickIcon} />}
          <ProfileName>
            {`@${username}`}
          </ProfileName>
        </NameSection>
        <Button>
          {'Follow'}
        </Button>
      </MainSection>
      <CloseButton />
    </Wrap>
  );
};

export default ProfileCard;
