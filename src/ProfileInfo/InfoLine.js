import React from 'react';
import styled from 'styled-components';
import locationIcon from './location-icon.svg';
import linkIcon from './link-icon.svg';
import joinedIcon from './joined-icon.svg';

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

const ProfileInfoLine = (props) => {
  const { location, site, joined } = props;

  return (
    <Line>
      {location && <Icon src={locationIcon} />}
      {site && <Icon src={linkIcon} />}
      {joined && <Icon src={joinedIcon} />}
      <Text>
        {location || (site && (
        <Link href="#">
          {site}
        </Link>
        )) || (joined && `Joined ${joined}`)}
      </Text>
    </Line>
  );
};

export default ProfileInfoLine;
