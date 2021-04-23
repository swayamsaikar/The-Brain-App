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
            margin: 20,
            borderColor: "black",
            backgroundColor: "#fff",
            padding: 10,
            elevation: 10,
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            Choose The Topics That you want To Read About Brain !
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={true}
          data={AllChaptersData}
          numColumns={2}
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
