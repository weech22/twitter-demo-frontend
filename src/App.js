import React, { Component } from "react";
import "./Fonts/fonts.css";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import { Link } from "./styles";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo />
          </div>
          <div className="col-lg-6">
            <Post
              name="Every Interaction"
              profileName="EveryInteract"
              time="23h"
              comments={1}
              retweets={4}
              likes={2}
              emails={0}
              bigFont={true}
            >
              Our new website concept; Taking you<br />from… @ Every Interaction<br />
              <Link href="#">instagram.com/p/BNFGrfhBP3M/</Link>
            </Post>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
