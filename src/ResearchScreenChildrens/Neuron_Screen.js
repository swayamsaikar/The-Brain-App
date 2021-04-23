import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Neuron_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Arr: [
        {
          text:
            "Sensory neurons carry information from the sense organs (such as the eyes and ears) to the brain",
          id: 1,
        },
        {
          text:
            "Motor neurons control voluntary muscle activity such as speaking and carry messages from nerve cells in the brain to the muscles.",
          id: 2,
        },
        { text: "All the other neurons are called interneurons.", id: 3 },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={[styles.imageStyle, { width: 300, height: 200 }]}
            source={require("../../assets/NeuronImageNeuronScreen.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>Neuron Archetecture</Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What are Neurons ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              Neurons are cells within the nervous system that transmit
              information to other nerve cells, muscle, or gland cells. Most
              neurons have a cell body, an axon, and dendrites. The cell body
              contains the nucleus and cytoplasm. The axon extends from the cell
              body and often gives rise to many smaller branches before ending
              at nerve terminals. Dendrites extend from the neuron cell body and
              receive messages from other neurons. Synapses are the contact
              points where one neuron communicates with another. The dendrites
              are covered with synapses formed by the ends of axons from other
              neurons.
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                There are three classes of neurons:
              </Text>
              {this.state.Arr.map((element) => (
                <Text
                  style={{ marginBottom: 10, fontWeight: "bold", fontSize: 17 }}
                >
                  {element.id}.{element.text}
                </Text>
              ))}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Text
                style={[styles.paraStyle, { fontWeight: "bold", fontSize: 16 }]}
              >
                The brain is what it is because of the structural and functional
                properties of interconnected neurons. The mammalian brain
                contains between 100 million and 100 billion neurons, depending
                on the species. Each mammalian neuron consists of a cell body,
                dendrites, and an axon. The cell body contains the nucleus and
                cytoplasm. The axon extends from the cell body and often gives
                rise to many smaller branches before ending at nerve terminals.
              </Text>

              <Text
                style={[styles.paraStyle, { fontWeight: "bold", fontSize: 16 }]}
              >
                When neurons receive or send messages, they transmit electrical
                impulses along their axons, which can range in length from a
                tiny fraction of an inch (or centimeter) to three feet (about
                one meter) or more. Many axons are covered with a layered myelin
                sheath, which accelerates the transmission of electrical signals
                along the axon. This sheath is made by specialized cells called
                glia. In the brain, the glia that make the sheath are called
                oligodendrocytes, and in the peripheral nervous system, they are
                known as Schwann cells.
              </Text>
            </View>
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
    fontSize: 16.5,
  },
});
