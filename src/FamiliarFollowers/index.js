import React from "react";
import styled from "styled-components";
import followersIcon from "./followers-icon.svg";
import avatar1 from "./avatars/1.jpg";
import avatar2 from "./avatars/2.jpg";
import avatar3 from "./avatars/3.jpg";
import avatar4 from "./avatars/4.jpg";
import avatar5 from "./avatars/5.jpg";
import avatar6 from "./avatars/6.jpg";

const Wrap = styled.div`
  margin-top: 18px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;
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
      <Link href="#">6 Followers you know</Link>
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
