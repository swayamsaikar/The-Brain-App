import React, { Component } from "react";
import { View, Text } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "react-native";
// import * as Network from "expo-network";

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    // network_status = await Network.getNetworkStateAsync();

    // if (network_status.isConnected) {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    this.props.navigation.replace(isLoggedIn !== "1" ? "Sign In" : "Home");
    // } else {
    //   alert("Pls connect your phone to internet");
    // }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
