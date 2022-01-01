import React, { Component } from "react";

// imported the whole root navigator to the app.js
import Navigator from "./src/Navigator";

// i have used this logBox to hide all the warnings
import { LogBox } from "react-native";

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}

// this will ignore all warnings
LogBox.ignoreAllLogs();
