import React, { Component } from "react";

// Imported All The Navigation Packages
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// imported All The Screens

import MainScreen from "./Screens/MainScreen";
import ResearchScreen from "./Screens/ResearchScreen";
import QuizScreen from "./Screens/QuizScreen";
import IntroductionScreen from "./ResearchScreenChildrens/Introduction_Screen";
import CellScreen from "./ResearchScreenChildrens/Cell_Screen";
import NeuronScreen from "./ResearchScreenChildrens/Neuron_Screen";
import Cerebral_Cortex_Screen from "./ResearchScreenChildrens/Cerebral_Cortex_Screen";
import HypothalmusScreen from "./ResearchScreenChildrens/Hypothalmus_Screen";
import CerebrumScreen from "./ResearchScreenChildrens/Cerebrum_Screen";
import FoodItemsScreen from "./Screens/FoodItemsScreen";

import LoginScreen from "./Screens/LoginScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import NewsScreen from "./Screens/NewsScreen";
import test from "../test";
import pp from "../pp";

const Stack = createStackNavigator();

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // Loading
          initialRouteName="pp"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#a29bfe",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          {/* Login and SignUp Screens  */}

          <Stack.Screen
            name="Sign In"
            component={LoginScreen}
            options={{
              headerTitleStyle: {
                textAlign: "center",
              },
            }}
          />

          {/* Main Screen (This is the Home Screen) */}

          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ headerShown: false }}
          />

          {/* test */}
          <Stack.Screen name="Test" component={test} />
          <Stack.Screen name="pp" component={pp} />

          <Stack.Screen name="Healthy Brain" component={FoodItemsScreen} />

          {/* Chapter Screens */}

          <Stack.Screen name="Research" component={ResearchScreen} />
          <Stack.Screen name="Introduction" component={IntroductionScreen} />
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{ title: "News Screen" }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              headerStyle: {
                backgroundColor: "#252c4a",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen name="Cell" component={CellScreen} />
          <Stack.Screen name="Neuron" component={NeuronScreen} />
          <Stack.Screen
            name="Cerebral Cortex"
            component={Cerebral_Cortex_Screen}
          />
          <Stack.Screen name="Cerebrum" component={CerebrumScreen} />
          <Stack.Screen name="Hypothalmus" component={HypothalmusScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
