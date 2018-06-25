import React from 'react';
import styled from 'styled-components';
import followersIcon from './followers-icon.svg';

const avatar1 = `${process.env.PUBLIC_URL}/avatars/1.jpg`;
const avatar2 = `${process.env.PUBLIC_URL}/avatars/2.jpg`;
const avatar3 = `${process.env.PUBLIC_URL}/avatars/3.jpg`;
const avatar4 = `${process.env.PUBLIC_URL}/avatars/4.jpg`;
const avatar5 = `${process.env.PUBLIC_URL}/avatars/5.jpg`;
const avatar6 = `${process.env.PUBLIC_URL}/avatars/6.jpg`;

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

const AvatarLink = styled.a`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const FamiliarFollowers = () => (
  <Wrap>
    <TitleBlock>
      <Icon src={followersIcon} />
      <Link href="#">
6 Followers you know
      </Link>
    </TitleBlock>
    <AvatarSection>
      <AvatarLink href="#">
        <Avatar src={avatar1} />
      </AvatarLink>
      <AvatarLink href="#">
        <Avatar src={avatar2} />
      </AvatarLink>
      <AvatarLink href="#">
        <Avatar src={avatar3} />
      </AvatarLink>
      <AvatarLink href="#">
        <Avatar src={avatar4} />
      </AvatarLink>
      <AvatarLink href="#">
        <Avatar src={avatar5} />
      </AvatarLink>
      <AvatarLink href="#">
        <Avatar src={avatar6} />
      </AvatarLink>
    </AvatarSection>
  </Wrap>
);

export default FamiliarFollowers;
