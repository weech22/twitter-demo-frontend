import React from "react";
import styled from "styled-components";
import mediaIcon from "./media-icon.svg";
const photo1 = `${process.env.PUBLIC_URL}/photos/1.jpg`;
const photo2 = `${process.env.PUBLIC_URL}/photos/2.jpg`;
const photo3 = `${process.env.PUBLIC_URL}/photos/3.jpg`;
const photo4 = `${process.env.PUBLIC_URL}/photos/4.jpg`;
const photo5 = `${process.env.PUBLIC_URL}/photos/5.jpg`;
const photo6 = `${process.env.PUBLIC_URL}/photos/6.jpg`;

const Wrap = styled.div`
  margin-top: 31px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 83px;
  height: 83px;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageLink = styled.a`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const Media = () => (
  <Wrap>
    <TitleBlock>
      <Icon src={mediaIcon} />
      <Link href="#">522 Photos and videos</Link>
    </TitleBlock>
    <ImageSection>
      <ImageLink href="#">
        <Image src={photo1} />
      </ImageLink>
      <ImageLink href="#">
        <Image src={photo2} />
      </ImageLink>
      <ImageLink href="#">
        <Image src={photo3} />
      </ImageLink>
      <ImageLink href="#">
        <Image src={photo4} />
      </ImageLink>
      <ImageLink href="#">
        <Image src={photo5} />
      </ImageLink>
      <ImageLink href="#">
        <Image src={photo6} />
      </ImageLink>
    </ImageSection>
  </Wrap>
);

export default Media;
