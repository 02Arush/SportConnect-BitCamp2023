import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import Constants from 'expo-constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <NavBar />
    </View>
  );
};

export default HomeScreen;

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text>Events</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.Body}>
      <Text>Body</Text>
    </View>
  );
};

const NavBar = () => {
  return (
    <View style={styles.NavBar}>
      <Text>Navbar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "top",
  },

  Header: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: "#E9E9E9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },


  Body: {
    flex: 1,
    flexDirection: "column",
  },
  NavBar: {
    paddingBottom: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    alignSelf: "stretch",
    paddingTop: 10,
  },
});
