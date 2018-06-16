import React from "react";
import styled from "styled-components";
import Preview from "./Preview";
import avatar from "../avatar.png";
import pinned from "./pinned-icon.svg";
import comments from "./comments-icon.svg";
import retweets from "./retweets-icon.svg";
import likes from "./likes-icon.svg";
import loves from "./loves-icon.svg";
import envelope from "./envelope-icon.svg";

const Wrap = styled.div`
  padding: 8px 0 12px 18px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e1e8ed;
`;

const PostBlock = styled.div`
  margin-left: 13px;
  display: flex;
  flex-direction: column;
`;

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.pinned ? "3px" : "11px")};
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
  letter-spacing: -0.2px;
  color: #292f33;
  margin-top: 0;
`;

const BigText = styled.p`
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;

  color: #292f33;
  margin: 0 0 13px 0;
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
  letter-spacing: -0.2px;
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
  font-weight: ${props => (props.liked ? "bold" : "normal")};
`;

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  font-size: 12px;
  letter-spacing: -0.2px;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const ImageBlock = styled.div`
  margin: 0 11px 14px 0;
`;

const PostedImage = styled.img`
  width: 495px;
`;

const Post = props => (
  <Wrap>
    <AvatarBlock pinned={props.pinned}>
      {props.pinned && <Pin src={pinned} />}
      <AvatarImage src={avatar} />
    </AvatarBlock>
    <PostBlock>
      <div>
        {props.pinned && <Pinned>Pinned Tweet</Pinned>}
        <Name>{props.name} </Name>
        <ProfileName>
          @{props.profileName} • {props.time}
        </ProfileName>
      </div>
      {props.bigFont && <BigText>{props.children}</BigText>}
      {!props.bigFont && <Text>{props.children}</Text>}
      {props.preview && (
        <Preview
          image={props.preview.image}
          link={props.preview.link}
          title={props.preview.title}
        >
          {props.preview.description}
        </Preview>
      )}
      {props.image && (
        <ImageBlock>
          <PostedImage src={props.image} />
        </ImageBlock>
      )}
      <ActionBlock>
        <Action>
          <Icon src={comments} />
          <ActionCount>{props.comments > 0 && props.comments}</ActionCount>
        </Action>
        <Action>
          <Icon src={retweets} />
          <ActionCount>{props.retweets > 0 && props.retweets}</ActionCount>
        </Action>
        <Action>
          {props.liked ? <Icon src={loves} /> : <Icon src={likes} />}
          <ActionCount liked={props.liked}>
            {props.likes > 0 && props.likes}
          </ActionCount>
        </Action>
        <Action>
          <Icon src={envelope} />
        </Action>
      </ActionBlock>
    </PostBlock>
  </Wrap>
);

export default Post;
