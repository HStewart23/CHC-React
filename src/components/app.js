import React from "react";
import StalkComp from "./stalkComp";
import LeafComp from "./leafComp";
import FlowerComp from "./flowerComp";
import PlantPotComp from "./plantPotComp";
import CloudComp from "./cloudComp";

export default class App extends React.Component {
  state = {
    totalCount: 0,
    timer: 60,
    timerId: 0,
    opponentTimerId: 0,
    active: false,
    gameOver: false
  };

  gameOver = () => {
    // this.reset();
    clearInterval(this.state.timerId);
    clearInterval(this.state.opponentTimerId);
    this.setState({ gameOver: true });
    // this.reset();
  };
  pointCounter = () => {
    if (this.state.totalCount === 29) {
      this.gameOver();
    }
    this.setState({ totalCount: this.state.totalCount + 1 });
  };

  // resetting mid game
  reset = () => {
    clearInterval(this.state.timerId);
    clearInterval(this.state.opponentTimerId);
    this.setState({ gameOver: false, active: false, totalCount: 0, timer: 60 });
    // this.start;
  };

  toggle = () => {
    if (this.state.active) {
      this.reset();
    }
    this.start();
  };

  start = () => {
    const timer = () => {
      this.setState(prevState => {
        return { timer: (prevState.timer -= 1) };
      });
    };

    const opponentTimer = () => {
      this.setState(prevState => {
        return { totalCount: (prevState.totalCount -= 3) };
      });
    };

    if (!this.state.active) {
      this.setState(() => {
        const id = setInterval(timer, 1000);
        const oppId = setInterval(opponentTimer, 3000);
        return {
          totalCount: 0,
          gameOver: false,
          timer: 60,
          active: true,
          timerId: id,
          opponentTimerId: oppId
        };
      });
    }
  };

  render() {
    let stalks = Array.from({
      length: Math.floor(this.state.totalCount / 3)
    });
    let leafs = Array.from({
      length: Math.floor(this.state.totalCount / 10)
    });

    return (
      <div>
        <ul>
          <li>
            <p className="timer"> timer: {this.state.timer}</p>
          </li>
          <li>
            <button onClick={this.toggle}>
              {this.state.active ? "Reset" : "Start"}
            </button>
            {!this.state.gameOver && this.state.active ? (
              <button onClick={this.pointCounter}>💦💧Water Me💧💦</button>
            ) : (
              ""
            )}
          </li>
          <li>
            <p className="timer float-right">
              {" "}
              points: {this.state.totalCount}
            </p>
          </li>
          <div className="clear" />
        </ul>
        <div className="container">
          <CloudComp />
          <PlantPotComp />
          {stalks.map((stalk, id) => (
            <StalkComp id={id} />
          ))}
          {leafs.map((leaf, id) => (
            <LeafComp id={id} />
          ))}
          <FlowerComp gameOver={this.state.gameOver} />
        </div>
      </div>
    );
  }
}
