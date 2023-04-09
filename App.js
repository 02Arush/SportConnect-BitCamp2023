import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { StatusBar } from "react-native";
import { useState } from "react";
import PostScreen from "./screens/PostScreen";

const Stack = createStackNavigator();

export default function App() {
  const [eventData, setEventData] = useState([]);

  const handleAddEventData = (newEvent) => {
    setEventData([...eventData, newEvent]);
  };

  const HomeScreenMemo = React.useMemo(() => () => <HomeScreen eventData={eventData} />, [eventData]);
  const PostScreenMemo = React.useMemo(() => () => <PostScreen handleAddEventData={handleAddEventData} />, [handleAddEventData]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreenMemo}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreenMemo}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
