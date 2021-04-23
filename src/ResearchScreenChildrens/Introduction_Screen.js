import { Image } from "react-native";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Introduction_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/brainImageIntroductionScreen.png")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>The Brain</Text>
        </View>
        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Brain ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              The brain is an amazing three-pound organ that controls all
              functions of the body, interprets information from the outside
              world, and embodies the essence of the mind and soul.
              Intelligence, creativity, emotion, and memory are a few of the
              many things governed by the brain. Protected within the skull, the
              brain is composed of the cerebrum, cerebellum, and BrainStem.
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.imageStyle, { width: 300 }]}
            source={require("../../assets/greyMatterImageIntroductionScreen.jpeg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>Grey Matter</Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Grey Matter ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              While people often speak of their “grey matter“, the brain also
              contains white matter. The grey matter is the cell bodies of the
              neurons, while the white matter is the branching network of
              thread-like tendrils – called dendrites and axons – that spread
              out from the cell bodies to connect to other neurons. But the
              brain also has another, even more numerous type of cell, called
              glial cells. These outnumber neurons ten times over. Once thought
              to be support cells, they are now known to amplify neural signals
              and to be as important as neurons in mental calculations. There
              are many different types of neuron, only one of which is unique to
              humans and the other great apes, the so called spindle cells.
              Brain structure is shaped partly by genes, but largely by
              experience. Only relatively recently it was discovered that new
              brain cells are being born throughout our lives – a process called
              neurogenesis. The brain has bursts of growth and then periods of
              consolidation, when excess connections are pruned. The most
              notable bursts are in the first two or three years of life, during
              puberty, and also a final burst in young adulthood.
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/chemicalMessengersImageIntroductionScreen.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>Chemical Messengers</Text>
        </View>
        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Chemical Messengers ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              The neurons in our brains communicate in a variety of ways.
              Signals pass between them by the release and capture of
              neurotransmitter and neuromodulator chemicals, such as glutamate,
              dopamine, acetylcholine, noradrenalin, serotonin and endorphins.
              Some neurochemicals work in the synapse, passing specific messages
              from release sites to collection sites, called receptors. Others
              also spread their influence more widely, like a radio signal,
              making whole brain regions more or less sensitive. These
              neurochemicals are so important that deficiencies in them are
              linked to certain diseases. For example, a loss of dopamine in the
              basal ganglia, which control movements, leads to Parkinson’s
              disease. It can also increase susceptibility to addiction because
              it mediates our sensations of reward and pleasure. Similarly, a
              deficiency in serotonin, used by regions involved in emotion, can
              be linked to depression or mood disorders, and the loss of
              acetylcholine in the cerebral cortex is characteristic of
              Alzheimer’s disease.
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
