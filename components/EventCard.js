import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// EVENT CARD
// THESE CARDS ARE DISPLAYED ON THE HOME SCREEN
// THEY DISPLAY THE EVENTS

const EventCard = ({title, date, time, location, attendence}) => {
  return (
    <View style = {styles.container}>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Text>{location}</Text>
      <Text>Attendence{attendence}</Text>
    </View>
  )
}

export default EventCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        borderRadius: 8,
        padding: 15,
        width: 350,
        marginVertical: 10,
    }
})