import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import IconButton from "./IconButton";

// EVENT CARD
// THESE CARDS ARE DISPLAYED ON THE HOME SCREEN
// THEY DISPLAY THE EVENTS

const EventCard = ({ title, date, time, location, attendence }) => {
  const [attendees, setAttendees] = useState(attendence);
  const [iconColor, setIconColor] = useState("#000");
  const [attending, setAttending] = useState(false);
  
  const handleToggleAttendee = () => {
    if (attending) {
      // Make it not attending
      setAttendees((attendees-1))
      setIconColor("#000")
    } else {
      // Make it attending
      setAttendees(((attendees-1)+2))
      setIconColor("#2b8a3e")
    }
    setAttending(!attending)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: "bold" }}>Sport: {title}</Text>
      <Text>
        Date/Time: {date} @ {time}
      </Text>
      <Text>Location: {location}</Text>
      <Text>Attendence: {attendees}</Text>
      <View style={{ flexDirection: "row", justifycontent: "flex-start" }}>
        <IconButton iconName="checkmark-circle-sharp" iconSize={28} iconColor = {iconColor} onClick = {handleToggleAttendee}/>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dbe4ff",
    borderRadius: 8,
    padding: 15,
    width: 350,
    marginVertical: 10,
  },
});
