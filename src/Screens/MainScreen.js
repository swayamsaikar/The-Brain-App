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
import * as Sharing from "expo-sharing";
import { Fab, Button } from "native-base";
import { Linking } from "react-native";

// Icons

import LogoutIcon from "react-native-vector-icons/MaterialIcons";
import ShareIcon from "react-native-vector-icons/Entypo";
import MailIcon from "react-native-vector-icons/Entypo";
import ChatIcon from "react-native-vector-icons/Entypo";
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
    displayText: "Want a healthy Brain ?",
    img: require("../../assets/healthyBrain.png"),
    backgroundColor: "#ffeaa7",
    navigateTo: "Healthy Brain",
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
      activeFAB: false,
    };
  }

  getCurrentUsersData = async () => {
    const CurrentUserEmail = await AsyncStorage.getItem("currentUserEmail");
    db.collection("Users")
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
            centerComponent={{
              text: "The Brain",
              style: { fontSize: 24, color: "#fff", fontWeight: "bold" },
            }}
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
            centerComponent={{
              text: "The Brain",
              style: { fontSize: 24, color: "#fff", fontWeight: "bold" },
            }}
            rightComponent={
              <LogoutIcon
                name="logout"
                size={35}
                color="#000"
                onPress={() => {
                  firebase.auth().signOut();
                  this.props.navigation.replace("Sign In");
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
            margin: 8.5,
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

        <View style={{ flex: 1 }}>
          <Fab
            position="bottomRight"
            onPress={() => {
              alert("Hello");
            }}
            containerStyle={{ height: 300 }}
            style={{
              backgroundColor: "#5067FF",
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
            }}
          >
            <ChatIcon name="share" />
          </Fab>
        </View>
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
    fontSize: 21,
    textAlign: "center",
  },
  fab: {
    padding: 20,
    backgroundColor: "#fff",
  },
});
