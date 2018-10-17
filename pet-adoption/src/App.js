import React from "react";
import {
  render
} from "react-dom";

import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1", {
          onClick: this.handleTitleClick
        },
        "Hello, Friend."
      ),
      React.createElement(Pet, {
        name: "Moose",
        animal: "Dog",
        breed: "German Shepherd"
      }),
      React.createElement(Pet, {
        name: "Bella",
        animal: "Dog",
        breed: "Teacup Yorkie"
      }),
      React.createElement(Pet, {
        name: "Simba",
        animal: "Dog",
        breed: "Teacup Yorkie"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));