import React from "react";
import video from "../videos/eldenRingBG.mp4";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">The fallen leaves tell a story...</h1>
      <video className="home__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
