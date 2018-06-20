import React from "react";
import styled from "styled-components";
import location from "./location-icon.svg";
import link from "./link-icon.svg";
import joined from "./joined-icon.svg";

const Text = styled.span`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const Line = styled.div`
  display: flex;
`;

const Icon = styled.img`
  margin-right: 13px;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 28px;
  font-size: 14px;
  color: #1d81c2;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileInfoLine = props => (
  <Line>
    {props.location && <Icon src={location} />}
    {props.site && <Icon src={link} />}
    {props.joined && <Icon src={joined} />}
    <Text>
      {props.location ||
        (props.site && <Link>{props.site}</Link>) ||
        (props.joined && `Joined ${props.joined}`)}
    </Text>
  </Line>
);

export default ProfileInfoLine;
