import React from 'react';
import styled from 'styled-components';

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
  const { caption, icon, isLink } = props;

  return (
    <Line>
      <Icon src={icon} />
      {isLink ? (
        <Link href={`https://${caption}`}>
          {caption}
        </Link>
      ) : (
        <Text>
          {caption}
        </Text>
      )}
    </Line>
  );
};

export default ProfileInfoLine;
