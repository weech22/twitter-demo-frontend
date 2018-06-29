import React from 'react';
import Post from '../Post';
import vilijamis from './vilijamis.png';

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
    time: '2 Mar 2015',
    comments: 0,
    retweets: 17,
    likes: 47,
    isBigFont: true,
    isPinned: true,
    isLiked: true,
    image: postedImage,
    text:
      'We&apos;ve made some more resources for all<br />you wonderful <a href="#">#design</a> folk<br /><a href="#">everyinteraction.com/resources/</a> <a href="#">#webdesign</a><br /><a href="#">#UI</a>',
  },
  {
    time: '23h',
    comments: 1,
    retweets: 4,
    likes: 2,
    isBigFont: true,
    text:
      'Our new website concept; Taking you from @ Every Interaction <a href="#">instagram.com/p/BNFGrfhBP3M/</a>',
  },
  {
    time: 'Nov 18',
    comments: 0,
    retweets: 0,
    likes: 0,
    preview: previewToVilijamis,
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
  },
];

const TweetList = ({ userData }) => {
  const { username, name } = userData;
  return posts.map(post => (
    <Post
      name={name}
      username={username}
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
  ));
};

export default TweetList;
