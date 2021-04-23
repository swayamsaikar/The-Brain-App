import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Hypothalmus_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.imageStyle, { width: 300, height: 250 }]}
            source={require("../../assets/HypothalmusImageHypothalmusScreen.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>Hypothalmus</Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Hypothalmus ?
            </Text>
          </View>

          <View style={[styles.paraStyle, { marginBottom: 14 }]}>
            <Text style={styles.paraTextStyle}>
              The hypothalamus is a small but important area of the brain formed
              by various nucleus and nervous fibers. Through its neuronal
              connections, it is involved in many complex functions of the
              organism such as vegetative system control, homeostasis of the
              organism, thermoregulation, and also in adjusting the emotional
              behavior. The hypothalamus is involved in different daily
              activities like eating or drinking, in the control of the body’s
              temperature and energy maintenance, and in the process of
              memorizing. It also modulates the endocrine system through its
              connections with the pituitary gland. Precise anatomical
              description along with a correct characterization of the component
              structures is essential for understanding its functions. The
              hypothalamus also controls body temperature, hunger, important
              aspects of parenting and attachment behaviours, thirst, fatigue,
              sleep, and circadian rhythms.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  paraStyle: { width: "90%", marginTop: 10 },
  imageStyle: { width: 250, height: 250 },
  headingAndParaStyle: {
    marginLeft: "7%",
    marginTop: "5%",
    marginBottom: 10,
  },
  paraTextStyle: {
    fontSize: 16,
  },
});
