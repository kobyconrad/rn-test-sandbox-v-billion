// In App.js in a new project

import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Quit Counter" }}
        />
        <Stack.Screen
          name="Reset"
          component={ResetDate}
          options={{ title: "Reset Date" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("randomNumb", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("randomNumb");
    if (value !== null) {
      console.log("success: ", value);
    }
  } catch (e) {}
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Quit Counter</Text>
      <Image
        source={require("./assets/clock.gif")}
        style={{ width: 120, height: 120 }}
      />
      <Button
        title="Random Number"
        onPress={() => {
          let ranNumb = Math.random();
          storeData(ranNumb);
        }}
      />
      <Button
        title="Read Data"
        onPress={() => {
          getData();
        }}
      />
      <Button
        title="Reset Counter"
        onPress={() => navigation.navigate("Reset")}
      />
      <Button
        title="Get Date"
        onPress={() => {
          let currentDate = new Date();
          console.log(currentDate);
        }}
      />
    </View>
  );
}

function ResetDate() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Reset Date</Text>
    </View>
  );
}

export default App;
