// This is the Text to Speech component which i have implemented through the help of expo-Speech API

import React, { Component } from "react";
import { View } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import * as Speech from "expo-speech";

export class TTS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconName: "sound",
      buttonClicked: false,
    };
  }

  playsound = (text) => {
    if (this.state.buttonClicked) {
      Speech.speak(text, {
        language: "en-in",
        onDone: () => {
          this.setState({ buttonClicked: false, iconName: "sound" });
        },
        volume: 0.5,
      });
    } else {
      Speech.stop();
    }
  };

  componentDidUpdate() {
    this.playsound(this.props.text);
  }

  render() {
    return (
      <View>
        {this.state.buttonClicked === false ? (
          <AntDesign
            name={this.state.iconName}
            color="red"
            size={30}
            onPress={() => {
              this.setState({ iconName: "pause", buttonClicked: true });
            }}
          />
        ) : (
          <AntDesign
            name={this.state.iconName}
            color="red"
            size={30}
            onPress={() => {
              this.setState({
                iconName: "sound",
                buttonClicked: false,
              });
            }}
          />
        )}
      </View>
    );
  }
}

export default TTS;
