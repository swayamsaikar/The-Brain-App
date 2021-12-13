import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import questionsData from "../../Extra/QuestionsData";

export default class QuizScreen extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      questionNumber: 0,
      showEndScreen: false,
      buttonClicked: false,
      index: "",
    };
  }

  handleOptionButtonClick = (isCorrect) => {
    if (isCorrect) {
      this.setState({ score: this.state.score + 1 });
    }

    var nextQuestion = this.state.questionNumber + 1;
    // added a new delay of 2 seconds to display the answer
    setTimeout(() => {
      if (nextQuestion < questionsData.length) {
        this.setState({ questionNumber: nextQuestion });
      } else {
        this.setState({ showEndScreen: true });
      }
      this.setState({ buttonClicked: false });
    }, 1);
  };

  render() {
    return this.state.showEndScreen ? (
      <View
        style={{
          flex: 1,
          backgroundColor: "#252C4A",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "lightblue",
            width: "85%",
            height: "40%",
            marginTop: "30%",
            borderRadius: 10,
            borderColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* percentage */}
            <View style={{ marginTop: "5%", marginLeft: "8%" }}>
              <Text
                style={{ color: "#F4F4F6", fontSize: 45, fontWeight: "bold" }}
              >
                {Math.round((this.state.score / questionsData.length) * 100)} %
              </Text>
            </View>

            <Image
              source={require("../../assets/BrainIcon.png")}
              style={{
                width: 70,
                height: 70,
                borderRadius: 40,
                marginTop: "5%",
                marginRight: "8%",
              }}
            />
          </View>
          <View style={{ marginLeft: "8%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#257a97",
                  fontSize: 17,
                  marginTop: 10,
                  fontWeight: "bold",
                }}
              >
                {this.state.score}/{questionsData.length}
              </Text>
              <Text
                style={{ marginTop: 10, marginLeft: 10, fontWeight: "bold" }}
              >
                ANSWERS CORRECT
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                borderRadius: 5,
                marginRight: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Every second, your body produces 25 million new cells. That
                means in 15 seconds, you will have produced more cells than
                there are people in the United States.
              </Text>
            </View>
          </View>
        </View>
        {/* Navigation Button */}
        <View style={{ marginTop: "10%" }}>
          <TouchableOpacity
            style={styles.NavigationButton}
            onPress={() => {
              this.setState({
                showEndScreen: false,
                score: 0,
                questionNumber: 0,
              });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
              Play Again
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#8992BA",
            marginTop: "20%",
          }}
        >
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
      </View>
    ) : (
      <View style={styles.container}>
        {/* This is the Question Text */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={[styles.questionText]}>
            <Text style={{ color: "#8992BA", fontSize: 25, fontWeight: "900" }}>
              Question {this.state.questionNumber + 1}
            </Text>
            <Text style={{ color: "#8992BA", fontSize: 17, marginTop: 5 }}>
              /{questionsData.length}
            </Text>
          </View>

          <Text style={{ fontSize: 40, color: "#fff", marginTop: 25 }}>|</Text>

          {/* This is the score text */}
          <View style={styles.questionText}>
            <Text style={{ color: "#8992BA", fontSize: 25, fontWeight: "900" }}>
              Score {this.state.score}
            </Text>
            <Text style={{ color: "#8992BA", fontSize: 17, marginTop: 5 }}>
              /{questionsData.length}
            </Text>
          </View>
        </View>

        {/* The view below this line is the underline of the question text */}

        <View
          style={{
            borderBottomColor: "#3C4465",
            borderBottomWidth: 1,
            marginTop: 5,
            width: "80%",
            alignSelf: "center",
          }}
        />

        <View
          style={{
            alignItems: "center",
            marginLeft: "10%",
            width: "80%",
            marginTop: "7%",
          }}
        >
          <Text
            style={{
              color: "#F4F4F6",
              fontSize: 17.6,
              fontWeight: "900",
              letterSpacing: 0.1,
            }}
          >
            {questionsData[this.state.questionNumber].question}
          </Text>
        </View>

        <View
          style={{
            marginTop: "15%",
            width: "80%",
            alignSelf: "center",
          }}
        >
          <FlatList
            data={questionsData[this.state.questionNumber].options}
            keyExtractor={(item) => item.question}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.optionsButton}
                  onPress={() => {
                    this.handleOptionButtonClick(item.isCorrect);
                    this.setState({ buttonClicked: true });

                    // so here we are finding the index of the correct answer and storing it in the index state
                    var index = questionsData[
                      this.state.questionNumber
                    ].options.findIndex((item) => item.isCorrect === true);

                    this.setState({ index: index });
                  }}
                  disabled={this.state.buttonClicked}
                >
                  <View style={styles.optionsView}>
                    <Text
                      style={{
                        color: "#F4F4F6",
                        fontSize: 15.6,
                        fontWeight: "900",
                        letterSpacing: 0.6,
                      }}
                    >
                      {item.answer}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => {
              item.answer;
            }}
          />

          {this.state.buttonClicked ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#55efc4",
                  fontSize: 20,
                  fontWeight: "900",
                  letterSpacing: 0.6,
                }}
              >
                Answer :
              </Text>
              <Text
                style={{
                  color: "#55efc4",
                  fontSize: 20,
                  fontWeight: "900",
                  letterSpacing: 0.6,
                  marginLeft: 5,
                }}
              >
                {
                  questionsData[this.state.questionNumber].options[
                    this.state.index
                  ].answer
                }
              </Text>
            </View>
          ) : null}
        </View>

        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#8992BA",
            marginTop: 10,
            marginLeft: 5,
            marginBottom: 5,
          }}
        >
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252C4A",
  },
  questionText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "9%",
  },

  optionsView: {
    padding: 15,
    borderRadius: 15,
    borderColor: "#214A6D",
    borderWidth: 2,
    marginBottom: 20,
  },
  NavigationButton: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#32bf6f",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
