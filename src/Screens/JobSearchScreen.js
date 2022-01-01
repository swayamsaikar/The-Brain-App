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
  TextInput,
} from "react-native";
import LocationIcon from "react-native-vector-icons/Entypo";

import { Button, ListItem } from "react-native-elements";

// imported the beautiful looking Pacman indicator from react-native-indicators
import { PacmanIndicator } from "react-native-indicators";
import {
  api_key,
  app_id,
  base_params,
  base_url,
  country_code,
} from "../config/jobScreen_config";

class JobSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      job_query: "mbbs",
      loading: true,
      country_code: "",
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
    });
  };

  getData = async () => {
    try {
      // making a request to the adzuna job api to get the job vacancies data
      var url = `${base_url}/${
        this.state.country_code
      }${base_params}&app_id=${app_id}&app_key=${api_key}&what=${this.state.job_query
        .toLocaleLowerCase()
        .trim()}&where=${"india"}&sort_by=salary&full_time=1`;

      var req = await fetch(url);
      var res = await req.json();

      this.setState({
        data: res.results,
        loading: false,
        buttonClicked: false,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  componentDidMount() {
    this.getCurrentLocation().then(() => {
      this.getData();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // alert(this.state.city);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: "2%" }}>
                <LocationIcon name="location" size={25} color="grey" />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {this.state.country_code.toUpperCase()}
                </Text>
              </View>
              <TextInput
                placeholder="Enter the job that you want to search"
                style={styles.Input}
                value={this.state.job_query}
                onChangeText={(job_query) => {
                  this.setState({ job_query });
                }}
              />
              <Button
                icon={{
                  name: "search",
                  size: 25,
                  color: "#fff",
                }}
                buttonStyle={{ borderRadius: 45 }}
                onPress={() => {
                  !this.state.job_query
                    ? alert("Please Fill The Input Field")
                    : this.getData();
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "80%",
              }}
            >
              <PacmanIndicator size={100} color="#a29bfe" />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#8992BA",
                marginTop: "10%",
              }}
            >
              Ⓒ 2021-22 developed by Swayam Sai Kar
            </Text>
          </View>
        ) : this.state.loading === false && this.state.data.length !== 0 ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: "2%" }}>
                <LocationIcon name="location" size={25} color="grey" />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {this.state.country_code.toUpperCase()}
                </Text>
              </View>
              <TextInput
                placeholder="Search jobs"
                style={styles.Input}
                value={this.state.job_query}
                onChangeText={(job_query) => {
                  this.setState({ job_query });
                }}
              />
              <Button
                icon={{
                  name: "search",
                  size: 25,
                  color: "#fff",
                }}
                buttonStyle={{ borderRadius: 45 }}
                onPress={() => {
                  !this.state.job_query
                    ? alert("Please Fill The Input Field")
                    : this.getData();
                }}
              />
            </View>
            <View style={{ marginLeft: 13, margin: 5 }}>
              <Text
                style={{ fontSize: 16, textAlign: "left", fontWeight: "bold" }}
              >
                Search Results for - {this.state.job_query}
              </Text>
            </View>
            <FlatList
              // looping through the healthnews state array for every news element create a card with every elements image,title,description,styles etc.
              data={this.state.data}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: 90 }}
              renderItem={({ item }) => (
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
                        style={{ fontSize: 15, opacity: 0.6 }}
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

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              paddingVertical: 4,
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            Salary Min - ₹{item.salary_min}/yr
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              Linking.openURL(item.redirect_url);
                            }}
                            style={{
                              padding: 10,
                              borderRadius: 10,
                              borderColor: "#000",
                              borderWidth: 2,
                            }}
                          >
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                              Learn More
                            </Text>
                          </TouchableOpacity>
                        </View>

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
              )}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: "2%" }}>
                <LocationIcon name="location" size={25} color="grey" />
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {this.state.country_code.toUpperCase()}
                </Text>
              </View>
              <TextInput
                placeholder="Search jobs"
                style={styles.Input}
                value={this.state.job_query}
                onChangeText={(job_query) => {
                  this.setState({ job_query });
                }}
              />
              <Button
                icon={{
                  name: "search",
                  size: 25,
                  color: "#fff",
                }}
                buttonStyle={{ borderRadius: 45 }}
                onPress={() => {
                  !this.state.job_query
                    ? alert("Please Fill The Input Field")
                    : this.getData();
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20%",
              }}
            >
              <Image
                source={require("../../assets/NoDataFoundImage.jpg")}
                style={{ height: 300, width: 300 }}
              />
              <Text style={{ fontSize: 27, fontWeight: "bold" }}>
                No Search Results Found !
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#8992BA",
                marginTop: "40%",
              }}
            >
              Ⓒ 2021-22 developed by Swayam Sai Kar
            </Text>
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

  Input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    fontSize: 20,
    width: "60%",
    padding: 5,
  },
});

export default JobSearchScreen;
