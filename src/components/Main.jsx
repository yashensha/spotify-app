import React from "react";
import Repeat from "../images/repeat.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">DUMMY</div>
      <div className="mainContent">
        <h1>For You</h1>
        <div className="cardWrap">
          <div className="card">
            <div className="cardImage">
              <img src="{Repeat}" alt="Repeat" />
            </div>
            <div className="cardContent">
              <h3>Repeat</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
