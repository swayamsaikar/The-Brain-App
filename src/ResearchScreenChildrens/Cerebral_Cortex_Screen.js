import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default class Cerebral_Cortex_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          text:
            "The top layer of the human brain is full of grooves, which significantly enlarge its surface. The brain consists of two symmetrical cerebral hemispheres (also called hemisphere cerebri) that are interconnected by the callus.",
          id: "‣ ",
        },
        {
          text:
            "The surface is wrinkled, and we can distinguish the brain curves that are separated by furrows. Although both hemispheres are physically identical, they have completely different roles.",
          id: "‣ ",
        },
        {
          text:
            "The first difference is that they control the opposite sides of the body: the right hemisphere controls the left side of the body, while the left hemisphere controls the right side of the body.          ",
          id: "‣ ",
        },
        {
          text:
            "The left hemisphere is related to functions of speech, writing, composing sentences, and problem-solving. Also, this half of the left brain is responsible for analytical thinking, while the right hemisphere is responsible for synthesis thinking, by looking at the whole.",
          id: "‣ ",
        },
        {
          text:
            "At the center of the cerebral hemispheres, the basal ganglia are found. There is a thin but extensive cerebral cortex on the surface of our brain. The basal ganglia play an important role in initiating and controlling movement.",
          id: "‣ ",
        },
        {
          text:
            "Since space in the skull is very limited, the cerebral cortex is wrinkled, as we have already said, which causes a much larger area of the cerebral cortex to fit into the same volume.",
          id: "‣ ",
        },
        {
          text:
            "The cerebral cortex is the most developed part of the human brain - four times the size of a gorilla. It is divided into a large number of fields, which differ in the number of layers of neurons and connection with other areas of the brain.",
          id: "‣ ",
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.imageStyle, { width: 300, height: 300 }]}
            source={require("../../assets/CerebralCortexcerebralCortexScreen.gif")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Cerebral Cortex
          </Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Cerebral Cortex ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              The surface of the cerebrum is called the cortex. It has a folded
              appearance with hills and valleys. The cortex contains 16 billion
              neurons (the cerebellum has 70 billion = 86 billion total) that
              are arranged in specific layers. The nerve cell bodies color the
              cortex grey-brown giving it its name – gray matter Beneath the
              cortex are long nerve fibers (axons) that connect brain areas to
              each other — called white matter.
            </Text>
          </View>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              Facts About Cerebral Cortex
            </Text>
          </View>

          {this.state.arr.map((element, index) => (
            <View style={styles.paraStyle}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                  {element.id}
                </Text>
                <Text style={styles.paraTextStyle}>{element.text}</Text>
              </View>
            </View>
          ))}
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
