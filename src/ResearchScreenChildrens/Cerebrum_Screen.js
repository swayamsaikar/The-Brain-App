import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default class Cerebrum_Screen extends Component {
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
            source={require("../../assets/CerebrumImageCerebrumScreen.jpg")}
          />
          <Text style={{ fontSize: 25 }}>Cerebrum</Text>
        </View>

        <View style={styles.headingAndParaStyle}>
          <View style={{ width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              What is Cerebrum ?
            </Text>
          </View>

          <View style={[styles.paraStyle, { marginBottom: 14 }]}>
            <Text style={styles.paraTextStyle}>
              Cerebrum, the largest and uppermost portion of the brain. The
              cerebrum consists of the cerebral hemispheres and accounts for
              two-thirds of the total weight of the brain. One hemisphere,
              usually the left, is functionally dominant, controlling language
              and speech. The other hemisphere interprets visual and spatial
              information.The cerebral hemispheres consist of an inner core of
              myelinated nerve fibres, the white matter, and an outer cortex of
              gray matter. The cerebral cortex is responsible for integrating
              sensory impulses, directing motor activity, and controlling higher
              intellectual functions. The human cortex is several centimetres
              thick and has a surface area of about 2,000 square cm (310 square
              inches), largely because of an elaborate series of convolutions;
              the extensive development of this cortex in humans is thought to
              distinguish the human brain from those of other animals. Nerve
              fibres in the white matter primarily connect functional areas of
              the cerebral cortex. The gray matter of the cerebral cortex
              usually is divided into four lobes, roughly defined by major
              surface folds. The frontal lobe contains control centres for motor
              activity and speech, the parietal for somatic senses (touch and
              position), the temporal for auditory reception and memory, and the
              occipital for visual reception. Sometimes the limbic lobe,
              involved with smell, taste, and emotions, is considered to be a
              fifth lobe.
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Image
              style={[
                styles.imageStyle,
                { width: 300, height: 250, marginRight: 50 },
              ]}
              source={require("../../assets/WhiteMatterImageCerebrumScreen.png")}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 25, marginRight: 50 }}>White Matter</Text>
          </View>
        </View>

        <View
          style={[styles.paraStyle, { marginBottom: 14, marginLeft: "7%" }]}
        >
          <Text style={styles.paraTextStyle}>
            Numerous deep grooves in the cerebral cortex, called cerebral
            fissures, originate in the extensive folding of the brain’s surface.
            The main cerebral fissures are the lateral fissure, or fissure of
            Sylvius, between the frontal and temporal lobes; the central
            fissure, or fissure of Rolando, between the frontal and parietal
            lobes, which separates the chief motor and sensory regions of the
            brain; the calcarine fissure on the occipital lobe, which contains
            the visual cortex; the parieto-occipital fissure, which separates
            the parietal and occipital lobes; the transverse fissure, which
            divides the cerebrum from the cerebellum; and the longitudinal
            fissure, which divides the cerebrum into two hemispheres.
          </Text>
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
