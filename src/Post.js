import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "./styles";
import avatar from "./avatar.png";
import comments from "./comments-icon.svg";
import retweets from "./retweets-icon.svg";
import likes from "./likes-icon.svg";
import loves from "./loves-icon.svg";
import emails from "./emails-icon.svg";
import Preview from "./Preview";
import pinned from "./pinned-icon.svg";

const Wrap = styled.div`
  padding-left: 17.5px;
  padding-bottom: 12px;
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e1e8ed;
`;

const PostBlock = styled.div`
  margin-left: 12.5px;
  display: flex;
  flex-direction: column;
`;

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.pinned ? "3px" : "10.6px")};
  justify-content: flex-start;
  align-items: flex-end;
`;

const Name = styled.span`
  font-family: HelveticaNeue;
  line-height: 19px;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.219231px;
  color: #292f33;
`;

const ProfileName = styled.span`
  font-family: HelveticaNeue;
  line-height: 19px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.0107692px;
  color: #697787;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  font-family: HelveticaNeue;
  line-height: 22px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.22px;
  color: #292f33;
  margin-top: 0;
`;

const BigText = styled.p`
  font-family: HelveticaNeue;
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 0.38px;
  color: #292f33;
  margin-bottom: 13px;
  margin-top: 0;
`;

const Icon = styled.img`
  margin-right: 11px;
`;

const Pin = styled.img`
  margin-bottom: 9.6px;
`;

const TweetAction = styled.div`
  display: flex;
`;

const TweetActionCount = styled.span`
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 13px;
  letter-spacing: -0.19px;
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
  font-weight: ${props => (props.liked ? "bold" : "normal")};
`;

const TweetActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  font-family: HelveticaNeue;
  line-height: normal;
  font-size: 12px;
  letter-spacing: -0.175385px;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const ImageBlock = styled.div`
  margin-right: 11px;
  margin-bottom: 14px;
`;

const PostedImage = styled.img`
  width: 495px;
`;

class Post extends Component {
  render() {
    return (
      <Wrap>
        <AvatarBlock pinned={this.props.pinned}>
          {this.props.pinned && <Pin src={pinned} />}
          <AvatarImage src={avatar} />
        </AvatarBlock>
        <PostBlock>
          <div>
            {this.props.pinned && <Pinned>Pinned Tweet</Pinned>}
            <Name>{this.props.name} </Name>
            <ProfileName>
              @{this.props.profileName} • {this.props.time}
            </ProfileName>
          </div>
          {this.props.bigFont && <BigText>{this.props.children}</BigText>}
          {!this.props.bigFont && <Text>{this.props.children}</Text>}
          {this.props.preview && (
            <Preview
              image={this.props.preview.image}
              link={this.props.preview.link}
              title={this.props.preview.title}
            >
              {this.props.preview.description}
            </Preview>
          )}
          {this.props.image && (
            <ImageBlock>
              <PostedImage src={this.props.image} />
            </ImageBlock>
          )}
          <TweetActionBlock>
            <TweetAction>
              <Icon src={comments} />
              <TweetActionCount>
                {this.props.comments > 0 && this.props.comments}
              </TweetActionCount>
            </TweetAction>
            <TweetAction>
              <Icon src={retweets} />
              <TweetActionCount>
                {this.props.retweets > 0 && this.props.retweets}
              </TweetActionCount>
            </TweetAction>
            <TweetAction>
              {this.props.liked ? <Icon src={loves} /> : <Icon src={likes} />}
              <TweetActionCount liked={this.props.liked}>
                {this.props.likes > 0 && this.props.likes}
              </TweetActionCount>
            </TweetAction>
            <TweetAction>
              <Icon src={emails} />
              <TweetActionCount>
                {this.props.emails > 0 && this.props.emails}
              </TweetActionCount>
            </TweetAction>
          </TweetActionBlock>
        </PostBlock>
      </Wrap>
    );
  }
}

export default Post;
