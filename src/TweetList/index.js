import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import TweetList from './TweetList';
import Miscellaneous from '../Miscellaneous';

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

const MainBlock = ({ userData }) => {
  const { username } = userData;
  return (
    <Wrap>
      <ListHeader>
        <ListLink to={`/${username}`}>
          {'Tweets'}
        </ListLink>
        <ListLink to={`/${username}/with_replies`} activeClassName="tweet-list">
          {'Tweets & replies'}
        </ListLink>
        <ListLink to={`/${username}/media`} activeClassName="tweet-list">
          {'Media'}
        </ListLink>
      </ListHeader>
      <Route exact path={`/${username}`} render={() => <TweetList userData={userData} />} />
      <Route exact path={`/${username}/with_replies`} component={Miscellaneous} />
      <Route exact path={`/${username}/media`} component={Miscellaneous} />
    </Wrap>
  );
};

export default MainBlock;
