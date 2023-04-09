import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import InputWithLabel from "../components/InputWithLabel";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const PostScreen = ({ handleAddEventData }) => {
  const nav = useNavigation();
  const [sport, setSport] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [attendance, setAttendance] = useState(0);

  const handlePostPress = () => {
    if (sport && date && time && location && attendance) {
      const newEvent = {
        id: `${sport}${date}${time}`,
        Title: sport,
        Date: date.toDateString(),
        Time: time.toTimeString(),
        Location: location,
        Attendence: attendance,
      };
      handleAddEventData(newEvent);
      nav.navigate("Home");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleCancelPress = () => {
    nav.navigate("Home");
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <InputWithLabel
        label="Sport"
        placeholder="Type your sport"
        value={sport}
        onChangeText={setSport}
      />
      {/* <InputWithLabel
        label="Date"
        placeholder="Date of Event"
        value={date}
        onChangeText={setDate}
      /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <DateTimePicker
          value={date}
          mode={"date"}
          display="default"
          onChange={handleDateChange}
        />
        
        <DateTimePicker
          value={time}
          mode={"time"}
          display="default"
          onChange={handleTimeChange}
        />
      </View>
      <InputWithLabel
        label="Location"
        placeholder="Location of Event"
        value={location}
        onChangeText={setLocation}
      />
      <InputWithLabel
        label="Attendance"
        placeholder="# of initial attendees"
        keyboardType="numeric"
        value={"" + attendance}
        onChangeText={setAttendance}
      />
      <TouchableHighlight style={styles.button} onPress={handlePostPress}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={handleCancelPress}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableHighlight>
    </View>
  );
};

export default PostScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  button: {
    marginTop: 16,
    alignItems: "center",
    backgroundColor: "#34495e",
    borderRadius: 8,
    padding: 16,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
