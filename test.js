import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  FlatList,
  Image,
} from "react-native";
import * as Network from "expo-network";

// imported the beautiful looking Pacman indicator from react-native-indicators
import { PacmanIndicator } from "react-native-indicators";
import {
  api_key,
  app_id,
  base_params,
  base_url,
  country_code,
} from "./src/config/jobScreen_config";

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      job_query: "cardiologist",
      loading: true,
      country_code: "",
      city: "",
    };
  }

  getCurrentLocation = async () => {
    // first getting the users public ip using this ip
    var ipreq = await fetch("https://api.ipify.org/?format=json");
    var ipres = await ipreq.json();

    // using another api to get the location details using this ip
    var locationReq = await fetch(`http://ip-api.com/json/${ipres.ip}`);
    var locationRes = await locationReq.json();

    // storing the details in the states
    this.setState({
      country_code: locationRes.countryCode.toLowerCase(),
      city: locationRes.city,
    });
  };

  getData = async () => {
    try {
      var url = `${base_url}/${country_code}${base_params}&app_id=${app_id}&app_key=${api_key}&what=${this.state.job_query
        .toLocaleLowerCase()
        .trim()}&where=${"india"}&sort_by=salary&full_time=1`;
      var req = await fetch(url);
      var res = await req.json();
      console.log(res);
      this.setState({ data: res.results, loading: false });
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.getData();
    // this.getCurrentLocation();
  }

  componentDidUpdate(prevProps, prevState) {
    // alert(this.state.city);
  }

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
        ) : this.state.loading === false && this.state.data.length !== 0 ? (
          <FlatList
            // looping through the healthnews state array for every news element create a card with every elements image,title,description,styles etc.

            data={this.state.data}
            keyExtractor={(item) => item.created}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.redirect_url);
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
                    <View style={{ width: "90%", marginLeft: 20 }}>
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
                        numberOfLines={5}
                        style={{ fontSize: 12, opacity: 0.6 }}
                      >
                        {item.description ? item.description : "No Description"}
                      </Text>
                      <View>
                        <Text
                          style={{
                            paddingVertical: 4,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          Location - {item.location.display_name}
                        </Text>
                        <Text
                          style={{
                            paddingVertical: 4,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          Contract Time - {item.contract_time}
                        </Text>

                        <Text
                          style={{
                            paddingVertical: 4,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          Salary Min - ₹{item.salary_min}/yr
                        </Text>

                        <Text
                          style={{
                            paddingVertical: 4,
                            fontWeight: "bold",
                            fontSize: 15,
                          }}
                        >
                          Salary Max - ₹{item.salary_max}/yr
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View>
            <Text>shit</Text>
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
  card: {},
  Image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    resizeMode: "cover",
  },
});

export default test;
