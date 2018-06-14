import React, { Component } from "react";
import styled from "styled-components";
import wallpaper from "./profile-bg.jpg";
import avatar from "./avatar.svg";

const Background = styled.div`
  height: 379px;
  width: 100%;
  background-size: cover;
  background-image: url(${wallpaper});
`;

const Avatar = styled.img`
  position: relative;
  left: 0px;
  top: 257px;
`;

class Wallpaper extends Component {
  render() {
    return (
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
  }
}

export default Wallpaper;
