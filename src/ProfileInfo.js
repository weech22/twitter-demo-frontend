import React, { Component } from "react";
import styled from "styled-components";
import location from "./location-icon.svg";
import link from "./link-icon.svg";
import joined from "./joined-icon.svg";
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
  font-family: HelveticaNeue;
  font-size: 14px;
  font-weight: 500;
  width: 128px;
  height: 39px;
  margin: 0 3px;
`;

const Description = styled.p`
  font-family: HelveticaNeue;
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #14171a;
  margin-top: 13px;
  margin-bottom: 11px;
`;

const Name = styled.span`
  font-family: HelveticaNeue;
  font-size: 22px;
  font-weight: 700;
  color: #14171a;
  margin-bottom: 0;
`;

const ProfileName = styled.span`
  font-family: HelveticaNeue;
  line-height: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #697787;
  margin-right: 8px;
`;

const FollowerProfile = styled.span`
  font-family: HelveticaNeue;
  font-size: 12px;
  color: #697787;
`;

const InfoLine = styled.div`
  display: flex;
`;

const ButtonBlock = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
`;

const InfoIcon = styled.img`
  margin-right: 13px;
`;

const TitleIcon = styled.img`
  margin: 1px 0 0 5px;
`;

const InfoText = styled.span`
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const InfoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: HelveticaNeue;
  line-height: 28px;
  font-size: 14px;
  color: #1d81c2;
`;

const ProfileInfo = props => (
  <Wrap>
    <InfoLine>
      <Name>Every Interaction</Name>
      <TitleIcon src={tick} />
    </InfoLine>
    <ProfileName>@EveryInteract</ProfileName>
    <FollowerProfile>Follows you</FollowerProfile>
    <Description>
      UX Design studio focused problem<br />solving creativity. Design to us is
      how<br />can we make things *work* amazing.
    </Description>
    <div>
      <InfoLine>
        <InfoIcon src={location} />
        <InfoText>London, UK</InfoText>
      </InfoLine>
      <InfoLine>
        <InfoIcon src={link} />
        <InfoLink>everyinteraction.com</InfoLink>
      </InfoLine>
      <InfoLine>
        <InfoIcon src={joined} />
        <InfoText>Joined May 2008</InfoText>
      </InfoLine>
    </div>
    <ButtonBlock>
      <ContactButton>Tweet to</ContactButton>
      <ContactButton>Message</ContactButton>
    </ButtonBlock>
  </Wrap>
);

export default ProfileInfo;
