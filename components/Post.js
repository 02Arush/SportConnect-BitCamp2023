import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Post = (props) => {
  const [increment, setIncrement] = useState(0);

  return (
    <View style={postStyles.card}>
      <Title>{props.title}</Title>
      <Text style={postStyles.description}>Date: {props.date}</Text>
      <Text style={postStyles.description}>Time: {props.time}</Text>
      <Text style={postStyles.description}>Location: {props.location}</Text>
      <Text style={postStyles.description}>Attendence: {props.attendence}</Text>
      <Text style={postStyles.description}>Count: {increment}</Text>
      <Button title='Attend' onPress={() => setIncrement(increment + 1)} />
    </View>
  );
};

const postStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 4,
  },
});