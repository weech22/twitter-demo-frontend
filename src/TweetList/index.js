import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import vilijamis from './vilijamis.png';
import Post from '../Post';

const postedImage = `${process.env.PUBLIC_URL}/pinned-post-image.png`;

const previewToVilijamis = {
  title: 'The Future of Web Fonts',
  description:
    'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
  link: 'vilijamis.com',
  image: vilijamis,
};

const posts = [
  {
    name: 'Every Interact',
    profileName: 'EveryInteract',
    time: '2 Mar 2015',
    comments: 0,
    retweets: 17,
    likes: 47,
    isBigFont: true,
    isPinned: true,
    isLiked: true,
    image: postedImage,
    text:
      'We&apos;ve made some more resources for all you wonderful <a href="#">#design</a> folk <a href="#">everyinteraction.com/resources/</a> <a href="#">#webdesign</a> <a href="#">#UI</a>',
  },
  {
    name: 'Every Interact',
    profileName: 'EveryInteract',
    time: '23h',
    comments: 1,
    retweets: 4,
    likes: 2,
    isBigFont: true,
    text:
      'Our new website concept; Taking you from @ Every Interaction <a href="#">instagram.com/p/BNFGrfhBP3M/</a>',
  },
  {
    name: 'Every Interact',
    profileName: 'EveryInteract',
    time: 'Nov 18',
    comments: 0,
    retweets: 0,
    likes: 0,
    preview: previewToVilijamis,
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
  },
];

const Wrap = styled.div`
  background: white;
  margin-top: 9px;
`;

const ListLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 35px;
  color: #1da1f2;

  &.active {
    color: black;
    cursor: default;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ListHeader = styled.div`
  padding: 18px 0 10px 16px;
`;

const TweetList = () => (
  <Wrap>
    <ListHeader>
      <ListLink to="/">
        {'Tweets'}
      </ListLink>
      <ListLink to="/replies" activeClassName="tweet-list">
        {'Tweets & replies'}
      </ListLink>
      <ListLink to="/media" activeClassName="tweet-list">
        {'Media'}
      </ListLink>
    </ListHeader>
    {posts.map(post => (
      <Post
        name={post.name}
        profileName={post.profileName}
        time={post.time}
        comments={post.comments}
        retweets={post.retweets}
        likes={post.likes}
        isBigFont={post.isBigFont}
        isLiked={post.isLiked}
        isPinned={post.isPinned}
        image={post.image}
        preview={post.preview}
        text={post.text}
      />
    ))}
  </Wrap>
);

export default TweetList;
