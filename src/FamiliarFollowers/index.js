import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import followersIcon from './followers-icon.svg';

const avatar1 = `${process.env.PUBLIC_URL}/avatars/1.jpg`;
const avatar2 = `${process.env.PUBLIC_URL}/avatars/2.jpg`;
const avatar3 = `${process.env.PUBLIC_URL}/avatars/3.jpg`;
const avatar4 = `${process.env.PUBLIC_URL}/avatars/4.jpg`;
const avatar5 = `${process.env.PUBLIC_URL}/avatars/5.jpg`;
const avatar6 = `${process.env.PUBLIC_URL}/avatars/6.jpg`;

const followers = [
  { avatar: avatar1, profile: 'noveltyshoe' },
  { avatar: avatar2, profile: 'Artsalve' },
  { avatar: avatar3, profile: 'aya_ulan' },
  { avatar: avatar4, profile: 'PinkyBazaaz' },
  { avatar: avatar5, profile: 'orynas ‏' },
  { avatar: avatar6, profile: 'benga' },
];

const Wrap = styled.div`
  margin-top: 18px;
`;

const Link = styled.a`
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

const title = '6 Followers you know';

const FamiliarFollowers = () => (
  <Wrap>
    <TitleBlock>
      <Icon src={followersIcon} />
      <Link href="#">
        {title}
      </Link>
    </TitleBlock>
    <AvatarSection>
      {followers.map(follower => (
        <AvatarLink to={`/${follower.profile}`}>
          <Avatar src={follower.avatar} />
        </AvatarLink>
      ))}
    </AvatarSection>
  </Wrap>
);

export default FamiliarFollowers;
