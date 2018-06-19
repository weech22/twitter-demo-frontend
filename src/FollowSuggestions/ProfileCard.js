import React from "react";
import styled from "styled-components";
import tickIcon from "./tick-icon.svg";
import crossIcon from "./cross-icon.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 16px;
  padding-top: 11px;
`;

const Avatar = styled.img`
  cursor: pointer;
`;

const Name = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #333333;
  font-weight: 700;
  margin-left: 2px;
`;

const ProfileName = styled.span`
  line-height: 17px;
  font-size: 13px;
  color: #657786;
  font-weight: 200;
  margin-left: 5px;
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
`;

const Tick = styled.img`
  margin-left: 5px;
`;

const CloseButton = styled.button`
  cursor: pointer;
  width: 8px;
  height: 8px;
  background-color: white;
  border: none;
  background-image: url(${crossIcon});
  background-repeat: no-repeat;
  background-position: center center;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 9px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarSection = styled.div`
  margin-right: 10px;
`;

const ProfileCard = props => (
  <Wrap>
    <AvatarSection>
      <Avatar src={props.avatar} />
    </AvatarSection>
    <MainSection>
      <NameSection>
        <Name>{props.name}</Name>
        {props.verified && <Tick src={tickIcon} />}
        <ProfileName>@{props.profileName}</ProfileName>
      </NameSection>
      <Button>Follow</Button>
    </MainSection>
  </Wrap>
);

export default ProfileCard;
