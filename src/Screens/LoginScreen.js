import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from "react-native";
import firebase from "firebase";
import db from "../config/firebase_config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { StatusBar } from "expo-status-bar";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      confirmPassword: "",
      email: "",
      password: "",
      modalVisible: false,
    };
  }

  SignUp = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("password doesn't match Check your password");
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          db.collection("Users").add({
            UserName: this.state.name,
            Email: this.state.email,
            ButtonVisible: true,
            // included hashing functionality where the user's passwords will be hashed using sha256 algo and then stored in the database
            password: await Crypto.digestStringAsync(
              Crypto.CryptoDigestAlgorithm.SHA256,
              password
            ),
          });
          return Alert.alert("User SignUp Successfull", "", [
            {
              text: "OK",
              onPress: () => {
                this.setState({ modalVisible: false });
              },
            },
          ]);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  signIn = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        this.props.navigation.replace("Home");
        await AsyncStorage.setItem("isLoggedIn", "1");
        await AsyncStorage.setItem(
          "currentUserEmail",
          firebase.auth().currentUser.email
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  DisplayModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <View style={styles.modal}>
          <StatusBar hidden={true} />
          <View style={{ marginTop: 20 }}>
            <Image
              source={require("../../assets/BrainIcon.png")}
              style={{ width: 170, height: 170, borderRadius: 10 }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "300",
                color: "#ff3d00",
                marginTop: 10,
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              The Brain
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.SignUpInput}
              value={this.state.name}
              placeholder="name"
              maxLength={8}
              onChangeText={(name) => {
                this.setState({
                  name: name,
                });
              }}
            />

            <TextInput
              style={styles.SignUpInput}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(email) => {
                this.setState({
                  email: email,
                });
              }}
              value={this.state.email}
            />
            <TextInput
              style={styles.SignUpInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => {
                this.setState({
                  password: password,
                });
              }}
              value={this.state.password}
            />
            <TextInput
              style={styles.SignUpInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(confirmPassword) => {
                this.setState({
                  confirmPassword: confirmPassword,
                });
              }}
              value={this.state.confirmPassword}
            />
          </View>

          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={() =>
              this.SignUp(
                this.state.email,
                this.state.password,
                this.state.confirmPassword
              )
            }
          >
            <Text style={styles.SignUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => this.setState({ modalVisible: false })}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: "center", color: "#8992BA" }}>
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar hidden={true} /> */}
        <View style={{ marginTop: 30 }}>
          <Image
            source={require("../../assets/BrainIcon.png")}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "300",
              color: "#ff3d00",
              marginTop: 10,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            The Brain
          </Text>
        </View>

        <View>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => {
              this.setState({ email: email });
            }}
            style={styles.LoginInput}
            keyboardType="email-address"
            placeholder="abc@gmail.com"
            placeholderTextColor="#ff8a65"
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password: password });
            }}
            style={styles.LoginInput}
            secureTextEntry={true}
            placeholderTextColor="#ff8a65"
            placeholder="password"
          />
        </View>

        {/* buttons */}
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={() => {
              !this.state.email || !this.state.password
                ? alert("Kindly Check You Input Fields")
                : this.signIn(this.state.email, this.state.password);
            }}
          >
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.LoginButton}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
          >
            <Text style={styles.LoginButtonText}>Don't have an account ?</Text>
          </TouchableOpacity>
        </View>

        {this.DisplayModal()}

        <Text style={{ marginTop: "8%", color: "#8992BA" }}>
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  // * Styles For Sign Up

  // -----

  // copied from The Previous class code

  SignUpInput: {
    width: 300,
    height: 50,
    borderWidth: 1.5,
    borderColor: "#8B7DAA",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },

  SignUpButton: {
    width: 270,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: 10,
    marginTop: 20,
  },

  //--------

  SignUpButtonText: {
    color: "white",
    fontSize: 18,
  },

  SignUpTitleText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#ff5722",
    marginTop: 50,
  },

  cancelButton: {
    width: 270,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: "5%",
  },

  cancelButtonText: {
    color: "white",
    fontSize: 20,
  },

  modal: {
    // flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },

  // *  Styles For Login

  LoginInput: {
    width: 300,
    height: 50,
    borderWidth: 1.5,
    borderColor: "#8B7DAA",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },

  LoginButton: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },

  LoginButtonText: {
    color: "white",
    fontSize: 20,
  },
});
