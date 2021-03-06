import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import peopleIcon from "./people-icon.svg";
import aiAvatar from "./ai.png";
import creodeAvatar from "./creode.png";
import eAvatar from "./epiphany.png";

const Wrap = styled.div`
  background: white;
  margin-top: 9px;
  padding: 9px 16px 19px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const Action = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.img`
  margin-right: 6px;
`;

const Dot = styled.span`
  font-size: 10px;
`;

const PeopleSearch = styled.div`
  margin-top: 23px;
`;

const Separator = () => <Dot> • </Dot>;

const FollowSuggestions = () => (
  <Wrap>
    <Title>Who to follow</Title>
    <Separator />
    <Action href="#">Refresh</Action>
    <Separator />
    <Action href="#">View all</Action>
    <ProfileCard
      avatar={aiAvatar}
      name="AppleInsider"
      profileName="appleinsider"
    />
    <ProfileCard
      avatar={creodeAvatar}
      name="Creode"
      profileName="Creode"
      verified
    />
    <ProfileCard
      avatar={eAvatar}
      name="Epiphany Search"
      profileName="Epiph..."
    />
    <PeopleSearch>
      <Icon src={peopleIcon} />
      <Action href="#">Find people you know</Action>
    </PeopleSearch>
  </Wrap>
);

export default FollowSuggestions;
