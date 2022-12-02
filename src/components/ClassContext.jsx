import React, { Component } from "react";
import { ThemeContext } from "../UseContext";

export default class ClassContext extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {(darkTheme) => {
            return <div style={this.themeStyles(darkTheme)}>Class theme</div>;
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}
