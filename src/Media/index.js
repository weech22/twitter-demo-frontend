import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mediaIcon from './media-icon.svg';

const photo1 = `${process.env.PUBLIC_URL}/photos/1.jpg`;
const photo2 = `${process.env.PUBLIC_URL}/photos/2.jpg`;
const photo3 = `${process.env.PUBLIC_URL}/photos/3.jpg`;
const photo4 = `${process.env.PUBLIC_URL}/photos/4.jpg`;
const photo5 = `${process.env.PUBLIC_URL}/photos/5.jpg`;
const photo6 = `${process.env.PUBLIC_URL}/photos/6.jpg`;

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const Wrap = styled.div`
  margin-top: 31px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Link = styled(NavLink)`
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  cursor: pointer;
  width: 83px;
  height: 83px;
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const Media = ({ username }) => (
  <Wrap>
    <TitleBlock>
      <Icon src={mediaIcon} />
      <Link to={`/${username}/media`}>
        {'522 Photos and videos'}
      </Link>
    </TitleBlock>
    <ImageSection>
      {photos.map(photo => <Image src={photo} />)}
    </ImageSection>
  </Wrap>
);

export default Media;
