// This is the header component
import React, { Component } from "react";
import { Header } from "react-native-elements";
export class MyHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          backgroundColor: "#a29bfe",
          style: {
            textAlign: "center",
            color: "#fff",
            fontSize: 22,
            // marginTop: 10,
            fontWeight: "bold",
          },
        }}
      />
    );
  }
}

export default MyHeader;
