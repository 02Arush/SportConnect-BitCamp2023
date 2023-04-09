import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Constants from "expo-constants";
import IconButton from "../components/IconButton";
import EventCard from "./../components/EventCard";
import EVENT_DATA from "../appdata/EventData";
import { useNavigation } from '@react-navigation/native';

// THIS EVENT DATA WILL BE REPLACED OR MODIFIED BY WHATEVER DATA WE GET FROM THE DATABASE LATER
// THIS IS JUST A PLACEHOLDER FOR TESTING THE UI

const accentColor = "#D9D9D9";
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
      <Text style={{fontSize: 18}}>Events</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.Body}>
      <FlatList
        data={EVENT_DATA}
        renderItem={({ item }) => (
          <EventCard 
            title={item.Title}
            date={item.Date}
            time={item.Time}
            location={item.Location}
            attendence={item.Attendence}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const NavBar = () => {
  const nav = useNavigation();

  const handleEventsButton = () => {
    console.log("events button clicked");
  };

  const handleAddEvent = () => {
    nav.navigate('Post');
  };

  const handleSettingsButton = () => {
    console.log("settings button clicked");
  };

  return (
    <View style={styles.NavBar}>
      <IconButton iconName="ios-add-outline" onClick={handleAddEvent} />
      <IconButton
        iconName="ios-settings-outline"
        onClick={handleSettingsButton}
      />
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
    backgroundColor: accentColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },

  Body: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },

  NavBar: {
    paddingBottom: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: accentColor,
    alignSelf: "stretch",
    paddingTop: 10,
  },
});
