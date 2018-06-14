import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";
import { Link } from "./styles";
import vilijamis from "./vilijamis.svg";
import postedImage from "./pinned-post-image.png";

const Wrap = styled.div`
  background: white;
  margin-top: 9px;
  width: 100%;
`;

const ListLink = styled.a`
  font-family: HelveticaNeue;
  line-height: 1;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.00846154px;
  color: ${props => (props.active ? "#14171a" : "#1da1f2")};
  cursor: ${props => (props.active ? "default" : "pointer")};
  margin-right: 35px;
`;

const ListHeader = styled.div`
  padding-top: 18px;
  padding-bottom: 10px;
  padding-left: 16px;
`;

const previewToVilijamis = {
  title: "The Future of Web Fonts",
  description:
    "We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…",
  link: "vilijamis.com",
  image: vilijamis
};

class TweetList extends Component {
  render() {
    return (
      <Wrap>
        <ListHeader>
          <ListLink active>Tweets</ListLink>
          <ListLink>Tweets & replies</ListLink>
          <ListLink>Media</ListLink>
        </ListHeader>
        <Post
          name="Every Interaction"
          profileName="EveryInteract"
          time="2 Mar 2015"
          comments={0}
          retweets={17}
          likes={47}
          emails={0}
          bigFont
          pinned
          liked
          image={postedImage}
        >
          We’ve made some more resources for all<br />you wonderful{" "}
          <Link>#design</Link> folk<br />
          <Link>everyinteraction.com/resources/</Link> <Link>#webdesign</Link>
          <br /> <Link>#UI</Link>
        </Post>
        <Post
          name="Every Interaction"
          profileName="EveryInteract"
          time="23h"
          comments={1}
          retweets={4}
          likes={2}
          emails={0}
          bigFont
        >
          Our new website concept; Taking you<br />from… @ Every Interaction<br />
          <Link href="#">instagram.com/p/BNFGrfhBP3M/</Link>
        </Post>
        <Post
          name="Every Interaction"
          profileName="EveryInteract"
          time="Nov 18"
          comments={0}
          retweets={0}
          likes={0}
          emails={0}
          bigFont={false}
          preview={previewToVilijamis}
        >
          Variable web fonts are coming, and will open a world of opportunities<br />for
          weight use online
        </Post>
      </Wrap>
    );
  }
}

export default TweetList;
