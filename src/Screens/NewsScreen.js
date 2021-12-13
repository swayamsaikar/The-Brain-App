import React, { Component } from "react";
import { Image } from "react-native";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  FlatList,
} from "react-native";

import {
  articles_url,
  country_code,
  api_key,
  news_category,
} from "../config/rest_config";

import { PacmanIndicator } from "react-native-indicators";

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      HealthNews: [],
    };
  }

  getNewsData = async () => {
    try {
      const url = `${articles_url}?country=${country_code}&category=${news_category}&apiKey=${api_key}`;
      var req = await fetch(url);
      var res = await req.json();
      this.setState({ loading: false, HealthNews: res.articles });
    } catch (error) {
      alert(error.message);
    }
  };

  componentDidMount = () => {
    this.getNewsData();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#8992BA",
            marginTop: 7,
            marginBottom: 2,
          }}
        >
          Ⓒ 2021-22 developed by Swayam Sai Kar
        </Text>
        {this.state.loading ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "90%",
            }}
          >
            <PacmanIndicator size={100} color="#a29bfe" />
          </View>
        ) : (
          <View>
            <FlatList
              data={this.state.HealthNews.reverse()}
              keyExtractor={(item) => item.publishedAt}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(item.url);
                  }}
                >
                  <View
                    style={{
                      margin: 10,
                      borderRadius: 10,
                      marginVertical: 7,
                      padding: 10,
                      backgroundColor: "#ffffff",
                      elevation: 15,
                    }}
                  >
                    <View style={styles.card}>
                      <Image
                        source={{
                          uri:
                            item.urlToImage !== null
                              ? item.urlToImage
                              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
                        }}
                        style={styles.Image}
                      />
                      <View style={{ width: "70%", marginLeft: 20 }}>
                        <Text
                          style={{
                            paddingVertical: 4,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                          numberOfLines={1}
                        >
                          {item.title}
                        </Text>

                        <Text
                          numberOfLines={15}
                          style={{ fontSize: 12, opacity: 0.6 }}
                        >
                          {item.description
                            ? item.description
                            : "No Description"}
                        </Text>
                        <Text>{item.publishedAt}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF3F3",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    resizeMode: "cover",
  },
});

export default NewsScreen;
