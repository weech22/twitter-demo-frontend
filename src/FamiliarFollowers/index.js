
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import followersIcon from './followers-icon.svg';
import followers from '../Followers';

const Wrap = styled.div`
  margin-top: 18px;
`;

const Link = styled(NavLink)`
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2px;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

const AvatarLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const FamiliarFollowers = ({ username }) => (
  <Wrap>
    <TitleBlock>
      <Icon src={followersIcon} />
      <Link to={`/${username}/followers`}>
        {'6 Followers you know'}
      </Link>
    </TitleBlock>
    <AvatarSection>
      {followers.map(follower => (
        <AvatarLink to={`/${follower.username}`}>
          <Avatar src={follower.avatar} />
        </AvatarLink>
      ))}
    </AvatarSection>
  </Wrap>
);

export default FamiliarFollowers;
