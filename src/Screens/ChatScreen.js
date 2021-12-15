import React, { Component } from "react";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class pp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      messages: [
        {
          _id: 1,
          text: "Welcome to The Brain I am mr. Bot",
          createdAt: new Date(),
          user: { _id: 2, name: "shit" },
        },
      ],
      question: "",
      answer: [],
      error: "",
    };
  }

  getData = async (q) => {
    // /\s/g will replace the blank spaces with %20
    var question = q.toString().toLowerCase().replace(/\s/g, "%20");

    var url = `https://api.wolframalpha.com/v2/query?input=${question}&format=plaintext&output=JSON&appid=3TY68L-GXRA75JT4A`;

    var req = await fetch(url);
    var res = await req.json();

    if (res.pods) {
      // At this moment i could not believe at myself and also i was fee proud of me
      for (var i = 0; i < res.queryresult.pods.length; i++) {
        // ... is a spread operator
        this.setState({
          answer: [res.queryresult.pods[i], ...this.state.answer].reverse(),
        });
      }
    } else {
      this.setState({ error: "Something went wrong in finding your answer" });
    }
  };

  sendReply = () => {
    var answer;
    if (this.state.answer.length === 2) {
      answer = [this.state.answer[1]];
    } else if (this.state.answer.length >= 5) {
      answer = [
        this.state.answer[1],
        this.state.answer[2],
        this.state.answer[3],
      ];
    } else if (this.state.answer.length > 2) {
      answer = [
        this.state.answer[1],
        this.state.answer[2],
        this.state.answer[3],
      ];
    }

    if (this.state.error === "") {
      answer.map((element) => {
        const msg = {
          _id: this.state.messages.length + 1,
          text: element.subpods[0].plaintext.replace(/\\n/g, ",").trim(),
          createdAt: new Date(),
          user: { _id: 2, name: "shit" },
        };
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, [msg]),
        }));
        this.setState({ answer: [], question: "" });
      });
    } else {
      const msg = {
        _id: this.state.messages.length + 1,
        text: this.state.error,
        createdAt: new Date(),
        user: { _id: 2, name: "shit" },
      };
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [msg]),
      }));
      this.setState({ answer: [], question: "" });
    }
  };

  componentDidUpdate = () => {
    console.log(this.state.answer.length);
  };

  onSend = async (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    await this.getData(messages[0].text).then(() => {
      console.log(this.state.answer);
      this.sendReply();
    });
  };

  // here i am changing the styles of the send button
  renderSend = (props) => (
    <Send {...props}>
      <MaterialCommunityIcons
        name="send-circle"
        size={32}
        color="#a30bfe"
        style={{ marginBottom: 5, marginRight: 5 }}
      />
    </Send>
  );

  // I am changing the styles of the main chat sections
  // Bubble means the main chat area
  renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#006942",
          marginLeft: "50%",
        },
        left: {
          backgroundColor: "#E6E6E6",
          marginRight: "50%",
        },
      }}
      // styling the text
      textStyle={{
        right: { color: "#fff", textAlign: "left" },
        left: { textAlign: "left" },
      }}
    />
  );

  scrollToBottomComponent = () => (
    <FontAwesome name="angle-double-down" size={32} color="#333" />
  );

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        showAvatarForEveryMessage
        onSend={(message) => this.onSend(message)}
        user={{ _id: 1, name: "Swaya" }}
        alwaysShowSend
        renderSend={(props) => this.renderSend(props)}
        renderBubble={(props) => this.renderBubble(props)}
        scrollToBottom
        backgroundColor="#fff"
        scrollToBottomComponent={() => this.scrollToBottomComponent()}
      />
    );
  }
}

export default pp;
