// imported react
import React, { Component } from "react";

// imported all the essential chat components from 'react-native-gifted-chat'
// we use bubble component to customize the main chat section and Send component to put the send icon instead of "send" text
// This GiftedChat component will give us a chat UI which we can customize according to our needs
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import { View, Text } from "react-native";

// imported all the essential icons (chaticon and goDown icon)
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BOT = {
  _id: 2,
  name: "Mr. Bot",
  avatar: require("../../assets/chatbotImage.png"),
};

class pp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      // whatever message you put in the messages array it will be displayed when the user comes to the chat screen (by default)
      messages: [
        {
          _id: 1,
          text: "Welcome to The Brain I am mr. Bot",
          createdAt: new Date(),
          user: BOT,
        },
      ],
      // here i ll store the message that the users sends to the bot
      question: "",

      // and here in this answer array i ll store whatever response i ll get from wolframalpha API by taking the message(this.state.question) as input
      answer: [],

      // and in the error state i ll store the error message
      error: "",
    };
  }

  // this get data function takes the message(question) as a parameter and calls the API and stores the response in the answer state array
  getData = async (q) => {
    // /\s/g will replace the blank spaces with %20
    var question = q.toString().toLowerCase().replace(/\s/g, "%20");

    var url = `https://api.wolframalpha.com/v2/query?input=${question}&format=plaintext&output=JSON&appid=3TY68L-GXRA75JT4A`;

    var req = await fetch(url);
    var res = await req.json();

    if (res.queryresult.pods) {
      // At this moment i could not believe at myself and also i was proud of me
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

  // this sendReply function will properly filter the answer array and loops through every element in the answers array and displays all the answers(stores(adds) it to the messages array and you if any message is added to the messages array then it will automatically be displayed in the chat)
  sendReply = () => {
    // filtering the array(reducing the size of the array)
    var answer;
    if (this.state.answer.length === 2) {
      answer = [this.state.answer[1]];
    } else if (this.state.answer.length > 5) {
      answer = [
        this.state.answer[1],
        this.state.answer[2],
        this.state.answer[3],
        this.state.answer[4],
        this.state.answer[5],
        this.state.answer[6],
      ];
    } else if (this.state.answer.length > 2) {
      answer = [
        this.state.answer[1],
        this.state.answer[2],
        this.state.answer[3],
      ];
    }

    // here we are checking that if there are no errors then only we ll loop through the answer array and adds it in the messages state array
    // else we are simpling adding a message "something went wrong in finding your answer"
    if (this.state.error === "") {
      // looping through the answers array
      answer.map((element) => {
        // creating a message object
        const msg = {
          // id is the number of total messages of the messages array + 1
          _id: this.state.messages.length + 1,
          // this text property is where we are displaying every element's plaintext property (where is the answer in plaintext)
          text: element.subpods[0].plaintext.replace(/\\n/g, ",").trim(),
          // adds with a new date
          createdAt: new Date(),
          // this user object is the BOT identity
          user: BOT,
        };

        // here we are appending everymessage to the messages array along with the previous messages(answers)
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, [msg]),
        }));

        // and then after displaying the answers in the chat UI we are simply making the answer state and the question state completly empty
        // because if the user will fill another question in the same process he ll also get the response and it will be stored in the answers state and then all answers will be messed up
        // so thats why :)!!!!
        this.setState({ answer: [], question: "" });
      });
    } else {
      // if it could not get the answer for some reason then it ll do the same thing
      // create the message with the error message
      const msg = {
        _id: this.state.messages.length + 1,
        text: this.state.error,
        createdAt: new Date(),
        user: BOT,
      };

      // and append it to the messages list along with the previous responses(messages)
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [msg]),
      }));

      // and then the same thing we are making all states along with the error state empty
      this.setState({ answer: [], question: "", error: "" });
    }
  };

  // this onSend() function triggers when the user types and enters a message
  // when the user sends a message then the message is stored in a messages array and then we are adding it to the messages state array so that the message will be displayed in the main chat sections
  onSend = async (messages = []) => {
    // here we are adding it to the messages state array along with the previous messages so that the message will be displayed in the main chat sections
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    // here i am passing the message as an argument in the getData(message) function and the response is stored in the answer state array
    // then after we get the response i am simply calling the sendReply() function which will filter the answer array and loop though the response and add every message to the messages array so that it ll be visible in the chat
    await this.getData(messages[0].text).then(() => {
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

  // here i am exchanging the default scrollDown button instead of my own button icon
  scrollToBottomComponent = () => (
    <FontAwesome name="angle-double-down" size={32} color="#333" />
  );

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        showAvatarForEveryMessage
        onSend={(message) => this.onSend(message)}
        // this user is me (user)
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
