import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FoodData from "../../Extra/FoodItemScreenData";
import { Card, CardItem, Body } from "native-base";

export default class FoodScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", height: 20 }}>
          <Text style={styles.textStyles}>Healthy Brains</Text>
        </View>

        <View
          style={{
            marginTop: "20%",
            padding: 10,
            backgroundColor: "#627cf3",
            width: "90%",
            borderRadius: 10,
            alignSelf: "center",
            elevation: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#dee3fc", fontSize: 15 }}>
            These are some tips To Improve The Power Of Brain
          </Text>
        </View>

        {/* // *  Here i have to make the card like structure using NativeBase (Copied the card Code from medium Author - " Ahmed Nehzi " )  */}

        <FlatList
          style={{ marginTop: "5%" }}
          onEndReachedThreshold={0.7}
          data={FoodData}
          renderItem={({ item }) => (
            <View
              key={item.key}
              style={{ width: "90%", alignSelf: "center", borderRadius: 20 }}
            >
              <Card style={{ elevation: 10 }}>
                <CardItem cardBody>
                  <Image
                    source={{ uri: item.Image }}
                    style={{ height: 200, width: null, flex: 1 }}
                  />
                </CardItem>
                <CardItem>
                  <Body>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.key}.
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          marginLeft: 10,
                        }}
                      >
                        {item.Title}
                      </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                      <Text style={{ fontSize: 13 }}>{item.Para}</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FE",
  },

  textStyles: {
    color: "#052c55",
    fontSize: 23,
    marginLeft: "5%",
    marginTop: "10%",
    fontWeight: "bold",
  },
});

/*
 * I will store all the food data in the FoodItemScreen.js  file and import the data here
 * by that data i will map through all the
 *  json objects that are inside the foodData array display it in a card like structure
 */
