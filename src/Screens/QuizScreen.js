import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import questionsData from "../../Extra/QuestionsData";

export default class QuizScreen extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      questionNumber: 0,
      showScore: false,
    };
  }

  handleOptionButtonClick = (isCorrect) => {
    if (isCorrect) {
      this.setState({ score: this.state.score + 1 });
    }

    var nextQuestion = this.state.questionNumber + 1;

    if (nextQuestion < questionsData.length) {
      this.setState({ questionNumber: nextQuestion });
    } else {
      this.setState({ showScore: true });
    }
  };

  render() {
    return this.state.showScore ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          You Scored {this.state.score}/{this.state.questionNumber}
        </Text>
        <Button
          title="Play Again!"
          onPress={() => {
            this.setState({ showScore: false, score: 1, questionNumber: 0 });
          }}
        />
      </View>
    ) : (
      <View style={styles.container}>
        {/* This is the Question Text */}

        <View style={styles.questionText}>
          <Text style={{ color: "#8992BA", fontSize: 25, fontWeight: "900" }}>
            Question {this.state.questionNumber}
          </Text>
          <Text style={{ color: "#8992BA", fontSize: 17, marginTop: 5 }}>
            /{questionsData.length}
          </Text>
        </View>

        {/* The view below this line is the underline of the question text */}

        <View
          style={{
            borderBottomColor: "#3C4465",
            borderBottomWidth: 1,
            marginTop: 20,
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
            marginTop: "25%",
            width: "80%",
            alignSelf: "center",
          }}
        >
          <FlatList
            data={questionsData[this.state.questionNumber].options}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionsButton}
                onPress={() => {
                  this.handleOptionButtonClick(item.isCorrect);
                }}
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
            )}
            keyExtractor={(item) => {
              item.answer;
            }}
          />
        </View>
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
    marginTop: "15%",
    marginLeft: "10%",
  },

  optionsView: {
    padding: 15,
    borderRadius: 15,
    borderColor: "#214A6D",
    borderWidth: 2,
    marginBottom: 20,
  },
});
