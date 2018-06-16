import React from "react";
import styled from "styled-components";
import ProfileInfoLine from "./ProfileinfoLine";
import tick from "./tick-icon.svg";

const Wrap = styled.div`
  margin-top: 41px;
`;

const ContactButton = styled.button`
  cursor: pointer;
  background: #1da1f2;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  width: 128px;
  height: 39px;
  margin: 0 3px;
`;

const Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #14171a;
  margin-top: 13px;
  margin-bottom: 11px;
`;

const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #14171a;
  margin-bottom: 0;
`;

const ProfileName = styled.span`
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #697787;
  margin-right: 8px;
`;

const FollowerProfile = styled.span`
  font-size: 12px;
  color: #697787;
`;

const ButtonBlock = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
`;

const TitleIcon = styled.img`
  margin: 1px 0 0 5px;
`;

const Title = styled.div`
  display: flex;
`;

const ProfileInfo = props => (
  <Wrap>
    <Title>
      <Name>Every Interaction</Name>
      <TitleIcon src={tick} />
    </Title>
    <ProfileName>@EveryInteract</ProfileName>
    <FollowerProfile>Follows you</FollowerProfile>
    <Description>
      UX Design studio focused problem<br />solving creativity. Design to us is
      how<br />can we make things *work* amazing.
    </Description>
    <div>
      <ProfileInfoLine location="London, UK" />
      <ProfileInfoLine site="everyinteraction.com" />
      <ProfileInfoLine joined="May 2008" />
    </div>
    <ButtonBlock>
      <ContactButton>Tweet to</ContactButton>
      <ContactButton>Message</ContactButton>
    </ButtonBlock>
  </Wrap>
);

export default ProfileInfo;
