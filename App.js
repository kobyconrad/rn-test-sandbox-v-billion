// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Quit Counter</Text>
      <Button
        title="Reset Counter"
        onPress={() => navigation.navigate("Reset")}
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
