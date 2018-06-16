import React from "react";
import styled from "styled-components";

const wallpaper = `${process.env.PUBLIC_URL}/profile-bg.jpg`;
const avatar = `${process.env.PUBLIC_URL}/profile-picture.png`;

const Background = styled.div`
  height: 379px;
  width: 100%;
  background-size: cover;
  background-image: url(${wallpaper});
`;

const Avatar = styled.img`
  position: relative;
  cursor: pointer;
  left: 0px;
  top: 257px;
`;

const Wallpaper = props => (
  <div>
    <Background src={wallpaper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Avatar src={avatar} />
          </div>
        </div>
      </div>
    </Background>
  </div>
);

export default Wallpaper;
