import React from 'react';
import styled from 'styled-components';
import Preview from './Preview';
import pinnedIcon from './pinned-icon.svg';
import commentsIcon from './comments-icon.svg';
import retweetsIcon from './retweets-icon.svg';
import likesIcon from './likes-icon.svg';
import lovesIcon from './loves-icon.svg';
import envelopeIcon from './envelope-icon.svg';

const avatar = `${process.env.PUBLIC_URL}/avatar.png`;

const Wrap = styled.div`
  cursor: pointer;
  padding: 8px 0 12px 18px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e1e8ed;
  &:hover {
    background: #f5f8fa;
  }
`;

const PostBlock = styled.div`
  margin-left: 13px;
  display: flex;
  flex-direction: column;
`;

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${(props) => {
    const { isPinned } = props;
    return isPinned ? '3px' : '11px';
  }};

  justify-content: flex-start;
  align-items: flex-end;
`;

const Name = styled.span`
  line-height: 19px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.2px;
  color: #292f33;
`;

const ProfileName = styled.span`
  line-height: 19px;
  font-size: 13px;
  font-weight: 400;
  color: #697787;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  color: #292f33;
  margin-top: 0;
  > a {
    text-decoration: none;
    color: #72c4f6;
  }
`;

const BigText = styled.p`
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;
  color: #292f33;
  margin: 0 0 13px 0;
  > a {
    text-decoration: none;
    color: #72c4f6;
  }
`;

const Icon = styled.img`
  margin-right: 11px;
  cursor: pointer;
`;

const Pin = styled.img`
  margin-bottom: 10px;
`;

const Action = styled.div`
  display: flex;
`;

const ActionCount = styled.span`
  font-size: 13px;

  font-weight: ${(props) => {
    const { isLiked } = props;
    return isLiked ? 'bold' : 'normal';
  }};

  color: ${(props) => {
    const { isLiked } = props;
    return isLiked ? '#E2264D' : '#667580';
  }};
`;

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  font-size: 12px;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const ImageBlock = styled.div`
  margin: 0 11px 14px 0;
  cursor: pointer;
`;

const PostedImage = styled.img`
  width: 495px;
`;

const Post = (props) => {
  const {
    isPinned,
    name,
    profileName,
    time,
    isBigFont,
    preview,
    image,
    comments,
    retweets,
    isLiked,
    likes,
    text,
  } = props;
  return (
    <Wrap>
      <AvatarBlock isPinned={isPinned}>
        {isPinned && <Pin src={pinnedIcon} />}
        <AvatarImage src={avatar} />
      </AvatarBlock>
      <PostBlock>
        <div>
          {isPinned && (
          <Pinned>
            {'Pinned Tweet'}
          </Pinned>
          )}
          <Name>
            {`${name} `}
          </Name>
          <ProfileName>
            {`@${profileName}  •  ${time}`}
          </ProfileName>
        </div>
        {isBigFont && <BigText dangerouslySetInnerHTML={{ __html: text }} />}
        {!isBigFont && <Text dangerouslySetInnerHTML={{ __html: text }} />}
        {preview && (
          <Preview image={preview.image} link={preview.link} title={preview.title}>
            {preview.description}
          </Preview>
        )}
        {image && (
          <ImageBlock>
            <PostedImage src={image} />
          </ImageBlock>
        )}
        <ActionBlock>
          <Action>
            <Icon src={commentsIcon} />
            <ActionCount>
              {comments > 0 && comments}
            </ActionCount>
          </Action>
          <Action>
            <Icon src={retweetsIcon} />
            <ActionCount>
              {retweets > 0 && retweets}
            </ActionCount>
          </Action>
          <Action>
            {isLiked ? <Icon src={lovesIcon} /> : <Icon src={likesIcon} />}
            <ActionCount isLiked={isLiked}>
              {likes > 0 && likes}
            </ActionCount>
          </Action>
          <Action>
            <Icon src={envelopeIcon} />
          </Action>
        </ActionBlock>
      </PostBlock>
    </Wrap>
  );
};

export default Post;
