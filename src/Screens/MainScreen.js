import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

import firebase from "firebase";
import db from "../config/firebase_config";
import { Linking } from "react-native";

// Icons

import LogoutIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MailIcon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Select The Categories data

const categoriesData = [
  {
    displayText: "Want To Research About Human Brain ?",
    img: require("../../assets/research.png"),
    backgroundColor: "#ffbc7c",
    navigateTo: "Research",
  },

  {
    displayText: "Want To Test Your Skills ?",
    img: require("../../assets/quiz(Category-Icon).png"),
    backgroundColor: "#badc58",
    navigateTo: "Quiz",
  },

  {
    displayText: "Want A Healthy Brain ?",
    img: require("../../assets/healthyBrain.png"),
    backgroundColor: "#ffeaa7",
    navigateTo: "Healthy Brain",
  },

  {
    displayText: "Want To Know The Current Medical Advancements ? ",
    img: require("../../assets/HealthNewsIcon.png"),
    backgroundColor: "#63cdda",
    navigateTo: "News",
  },
  {
    displayText: "Ask Me Anything!",
    img: require("../../assets/chatbotImage.png"),
    backgroundColor: "#30BBF9",
    navigateTo: "Chat",
  },
  {
    displayText: "Search And Find A Job Here!",
    img: require("../../assets/JobIcon.png"),
    backgroundColor: "#fab1a0",
    navigateTo: "Job",
  },
];

// Image Carousel

const ourServicesData = [
  {
    img: require("../../assets/doctors.png"),
  },
  {
    img: require("../../assets/brain.jpg"),
  },
  {
    img: require("../../assets/book.jpg"),
  },
  {
    img: require("../../assets/quiz.png"),
  },
];

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      ButtonVisible: "",
      currentUserDocId: "",
    };
  }

  getCurrentUsersData = async () => {
    const CurrentUserEmail = await AsyncStorage.getItem("currentUserEmail");
    await db
      .collection("Users")
      .where("Email", "==", CurrentUserEmail)
      .onSnapshot((collection) => {
        collection.docs.map((doc) => {
          this.setState({
            ButtonVisible: doc.data().ButtonVisible,
            currentUserDocId: doc.id,
          });
        });
      });
  };

  updateDocId = () => {
    db.collection("Users").doc(this.state.currentUserDocId).update({
      ButtonVisible: false,
    });

    this.getCurrentUsersData();
  };

  componentDidMount() {
    this.getCurrentUsersData();
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/MainScreenBackground.png")}
        style={{ flex: 1 }}
      >
        {this.state.ButtonVisible !== true ? (
          <Header
            backgroundColor="#a29bfe"
            style={{ padding: 10 }}
            centerComponent={() => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/BrainIcon.png")}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />

                <Text
                  style={{
                    fontSize: 24,
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  The Brain
                </Text>
              </View>
            )}
            rightComponent={
              <LogoutIcon
                name="logout"
                size={35}
                color="#000"
                onPress={() => {
                  AsyncStorage.removeItem("isLoggedIn");
                  firebase.auth().signOut();
                  this.props.navigation.replace("Sign In");
                }}
              />
            }
          />
        ) : (
          <Header
            backgroundColor="#a29bfe"
            style={{ padding: 10 }}
            centerComponent={() => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/BrainIcon.png")}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                  }}
                />

                <Text
                  style={{
                    fontSize: 24,
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  The Brain
                </Text>
              </View>
            )}
            rightComponent={
              <LogoutIcon
                name="logout"
                size={35}
                color="#000"
                onPress={async () => {
                  firebase.auth().signOut();
                  this.props.navigation.replace("Sign In");
                  await AsyncStorage.removeItem("isLoggedIn");
                }}
              />
            }
            leftComponent={
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("mailto:swayam@gmail.com");
                  this.updateDocId();
                }}
                style={{ borderRadius: 50 / 2 }}
              >
                <MailIcon name="mail" color="#000" size={30} />
              </TouchableOpacity>
            }
          />
        )}

        {/* This is The swiper View  ---- */}

        <View
          style={{
            marginTop: 10,
            height: "41.5%",
            width: "100%",
          }}
        >
          <Swiper style={{ height: "100%" }} autoplay={true} dotColor="#fff">
            {ourServicesData.map((item, index) => (
              <View key={index}>
                <Image source={item.img} style={styles.swiperImage} />

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
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
            marginBottom: 4,
            borderColor: "black",
            backgroundColor: "#dfe6e9",
            padding: 10,
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16.5,
              textAlign: "center",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Select the categories that you want to read about the Brain!
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

        <Text
          style={{
            fontWeight: "bold",
            marginTop: 5,
            marginBottom: 10,
            textAlign: "center",
            color: "#a29bfe",
          }}
        >
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
      </ImageBackground>
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
    fontSize: 19,
    textAlign: "center",
    fontWeight: "bold",
  },
  fab: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
