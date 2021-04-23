import { Image } from "react-native";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class Cell_Screen extends Component {
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
            source={require("../../assets/CellImageCellScreen.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 25 }}>Cell</Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is a Cell ?
            </Text>
          </View>

          <View style={styles.paraStyle}>
            <Text style={styles.paraTextStyle}>
              The brain is a mosaic made up of different cell types, each with
              their own unique properties. The most common brain cells are
              neurons and non-neuron cells called glia. Although neurons are the
              most famous brain cells, both neurons and glia cells are necessary
              for proper brain function.
            </Text>
            <View style={{ marginTop: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.imageStyle}
                  source={require("../../assets/GlialCellImageCellScreen.jpg")}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Glial Cell :
              </Text>
              <Text style={{ fontSize: 16, magrinTop: 10 }}>
                Like neurons, glia are important cells of the nervous system.
                Scientists used to think that glia were like glue, only for
                holding the neurons in place. The name “glia” is Latin for
                “glue.” However, we now know that glial cells are not just brain
                glue. In fact, glia actively participate in brain signaling, and
                are necessary for the healthy function of neurons. Unlike
                neurons, glial cells cannot fire action potentials to
                communicate messages, but that does not mean they are inactive.
                Glia communicate to each other and to neurons using chemical
                signals, and can even respond to many of the same chemicals that
                neurons can, such as ions and neurotransmitters. This means that
                glia can eavesdrop on the neurons, to help strengthen the
                messages that are passed between them.
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                  style={styles.imageStyle}
                  source={require("../../assets/OligodendrocytesCellImageCellScreen.jpg")}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Oligodendrocytes Cell :
              </Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>
                Like neurons, glia are important cells of the nervous system.
                Scientists used to think that glia were like glue, only for
                holding the neurons in place. The name “glia” is Latin for
                “glue.” However, we now know that glial cells are not just brain
                glue. In fact, glia actively participate in brain signaling, and
                are necessary for the healthy function of neurons. Unlike
                neurons, glial cells cannot fire action potentials to
                communicate messages, but that does not mean they are inactive.
                Glia communicate to each other and to neurons using chemical
                signals, and can even respond to many of the same chemicals that
                neurons can, such as ions and neurotransmitters. This means that
                glia can eavesdrop on the neurons, to help strengthen the
                messages that are passed between them.
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                  style={styles.imageStyle}
                  source={require("../../assets/MicrogliaCellImageCellScreen.png")}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Microglia Cell :
              </Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>
                Microglia are the immune cells of the central nervous system.
                They move around within the brain and constantly communicate
                with other glia. In a healthy adult brain, microglia are
                constantly testing the environment for signs of trouble. For
                example, if an infection or disease causes neurons to die or
                become damaged, these neurons will release chemical “danger
                signals.” Microglia recognize these signals, and alert other
                nearby microglia of potential danger. This causes the
                surrounding microglia to swarm to the dangerous area, where they
                begin to clean up
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                  style={styles.imageStyle}
                  source={require("../../assets/AstrocytesCellImageCellScreen.png")}
                  resizeMode="contain"
                />
              </View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Astrocytes Cell :
              </Text>
              <Text style={{ fontSize: 16, marginTop: 5 }}>
                Astrocytes are star-shaped cells that surround neurons and
                support neuron function. Astrocytes mainly help regulate the
                brainâ€™s environment. Astrocytes also help neurons signal to
                other neurons by passing chemicals from one neuron to another.
                Although microglia are the primary immune cells of the brain,
                astrocytes can also help microglia when the brain is in trouble.
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
    fontSize: 16,
  },
});
