import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

// Select The Categories data
const categoriesData = [
  {
    displayText: "Want To Research About Human Brain ?",
    img: require("../../assets/research.png"),
    backgroundColor: "#CB9178",
    navigateTo: "Research",
  },

  {
    displayText: "Want To Test Your Skills ?",
    img: require("../../assets/quiz(Category-Icon).png"),
    backgroundColor: "#71A87D",
    navigateTo: "Quiz",
  },

  {
    displayText: "Want a healthy Brain ?",
    img: require("../../assets/healthyBrain.png"),
    backgroundColor: "#9F79EE",
    navigateTo: "Healthy Brain",
  },
];

// Image Carousel

const ourServicesData = [
  {
    img: require("../../assets/quiz.png"),
  },
  {
    img: require("../../assets/brain.jpg"),
  },
  {
    img: require("../../assets/book.jpg"),
  },
  {
    img: require("../../assets/doctors.png"),
  },
];

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#252C4A" }}>
        <Header
          backgroundColor="#4B0082"
          style={{ padding: 10 }}
          centerComponent={{
            text: "The Brain",
            style: { fontSize: 24, color: "white", fontWeight: "bold" },
          }}
        />

        {/* This is The swiper View  ---- */}

        <View
          style={{
            marginTop: 10,
            height: "42.2%",
            width: "100%",
          }}
        >
          <Swiper style={{ height: "100%" }} autoplay={true} dotColor="#fff">
            {ourServicesData.map((item, index) => (
              <View key={index}>
                <Image source={item.img} style={styles.swiperImage} />

                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "900",
                    color: "#F4F4F6",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Our Services
                </Text>
              </View>
            ))}
          </Swiper>
        </View>

        {/* To This  -------- */}
        <View
          style={{
            borderRadius: 20,
            margin: 8.5,
            borderColor: "black",
            backgroundColor: "#5d6589",
            padding: 10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16.5,
              textAlign: "center",
              color: "#f4f4f4",
              fontWeight: "bold",
            }}
          >
            Select The Categories That you want To Read About Brain !
          </Text>
        </View>

        <View
          style={{
            marginTop: 5,
            width: "90%",
            height: "30%",
            alignSelf: "center",
          }}
        >
          <Swiper
            style={{ height: "100%" }}
            showsButtons={true}
            showsPagination={false}
            autoplay={true}
            loop={true}
            autoplayTimeout={3}
          >
            {categoriesData.map((item, index) => (
              <TouchableOpacity
                style={{ borderRadius: 20 }}
                key={index}
                onPress={() => {
                  this.props.navigation.navigate(item.navigateTo);
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    backgroundColor: item.backgroundColor,
                    padding: 20,
                    height: "100%",
                  }}
                >
                  <Image source={item.img} style={styles.TouchableImageStyle} />
                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.TouchableTextStyle}>
                      {item.displayText}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiperImage: {
    width: "90%",
    height: 200,
    marginTop: 20,
    borderRadius: 20,
    alignSelf: "center",
    opacity: 0.9,
    position: "relative",
  },
  TouchableImageStyle: {
    width: 115,
    height: 115,
    marginTop: 20,
  },

  TouchableTextStyle: {
    fontSize: 21,
    textAlign: "center",
  },
});
