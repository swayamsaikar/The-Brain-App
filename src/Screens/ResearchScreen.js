import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import AllChaptersData from "../../Extra/ChaptersData";

export default class ResearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderRadius: 20,
            marginTop: 10,
            marginHorizontal: 20,
            borderColor: "black",
            backgroundColor: "#fff",
            padding: 10,
            elevation: 10,
          }}
        >
          <Text
            style={{ fontSize: 16, textAlign: "center", fontWeight: "bold" }}
          >
            Choose the topics that you want to read about Brain !
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={true}
          data={AllChaptersData}
          numColumns={2}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 20, elevation: 10 }}
              onPress={() => {
                this.props.navigation.navigate(item.navigationPath);
              }}
            >
              <View
                style={[styles.touchables, { backgroundColor: item.color }]}
              >
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    width: item.width,
                    height: item.height,
                    marginTop: 20,
                  }}
                />
                <Text style={styles.TouchableTextStyle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 5,
            marginBottom: 5,
            color: "#8992BA",
          }}
        >
          Ⓒ 2021-22 developed by Swayam Sai kar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  touchables: {
    width: 140,
    height: 150,
    borderRadius: 20,
    alignItems: "center",
    elevation: 12,
  },
  TouchableTextStyle: {
    fontSize: 17,
    marginTop: 20,
    color: "white",
  },
});
