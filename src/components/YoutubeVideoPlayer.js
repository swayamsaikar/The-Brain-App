import React, { Component } from "react";
import { Linking, View, Image, Text, TouchableOpacity } from "react-native";

// This YoutubeVideoPlayer component is a kind of a template which i can reuse by giving the title,url and thumbnail of the video and it ll automatically show the video
class YoutubeVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {this.props.title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(this.props.url);
          }}
        >
          <Image
            source={this.props.imgPath}
            style={{
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 2,
              marginLeft: 8.5,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          (Click on the image to see the video)
        </Text>
      </View>
    );
  }
}

export default YoutubeVideoPlayer;
