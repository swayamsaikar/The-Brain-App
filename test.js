import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { PacmanIndicator } from "react-native-indicators";

// https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
// let str = "\t\n\r this  \n \t   \r  is \r a   \n test \t  \r \n";
// str = str.replace(/\s+/g, " ").trim();
// console.log(str); // logs: "this is a test"

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "How are you",
      answer: [],
      error: "",
      loading: true,
    };
  }

  getData = async () => {
    // /\s/g will replace the blank spaces with %20
    var question = this.state.question
      .toString()
      .toLowerCase()
      .replace(/\s/g, "%20");

    var url = `https://api.wolframalpha.com/v2/query?input=${question}&format=plaintext&output=JSON&appid=3TY68L-GXRA75JT4A`;

    var req = await fetch(url);
    var res = await req.json();

    // At this moment i could not believe at myself and also i was fee proud of me
    if (res.queryresult.success) {
      for (var i = 0; i < res.queryresult.pods.length; i++) {
        // ... is a spread operator
        this.setState({
          answer: [res.queryresult.pods[i], ...this.state.answer].reverse(),
          loading: false,
        });
      }
    } else {
      this.setState({ error: "Oppsie! something went wrong!", loading: false });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return this.state.loading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PacmanIndicator size={100} color="#a29bfe" />
      </View>
    ) : (
      <View>
        {this.state.answer.length !== 0
          ? this.state.answer.map((element) => (
              <View>
                {/* This guy helped me a lot in these signs https://stackoverflow.com/a/36274681/17594145 */}
                <Text>
                  {element.title ? element.title + ":" : null}
                  {element.subpods[0].plaintext.replace(/\\n/g, ",").trim()}
                </Text>
              </View>
            ))
          : null}
      </View>
    );
  }
}

export default test;
