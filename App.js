import React, { Component } from "react";
import Navigator from "./src/Navigator";
import { LogBox } from "react-native";

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
LogBox.ignoreAllLogs();
