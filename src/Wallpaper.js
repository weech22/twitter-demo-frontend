import React, { Component } from "react";
import styled from "styled-components";
import wallpaper from "./profile-bg.jpg";

const Background = styled.div`
  height: 379px;
  width: 100%;
  background-size: cover;
  background-image: url(${wallpaper});
`;

class Wallpaper extends Component {
  render() {
    return (
      <div>
        <Background src={wallpaper} />
      </div>
    );
  }
}

export default Wallpaper;
