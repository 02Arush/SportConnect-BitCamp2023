import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel.js';
import { useNavigation } from '@react-navigation/native';

const PostScreen = () => {
  const nav = useNavigation();

  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [attendance, setAttendance] = useState('');

  const handlePostPress = () => {
    nav.navigate('Home');
  };

  const handleCancelPress = () => {
    nav.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <InputWithLabel
          label="Sport"
          placeholder="Type your sport"
          value={sport}
          onChangeText={setSport}
        />
        <InputWithLabel
          label="Date"
          placeholder="Type your date"
          value={date}
          onChangeText={setDate}
        />
        <InputWithLabel
          label="Time"
          placeholder="Type your time"
          value={time}
          onChangeText={setTime}
        />
        <InputWithLabel
          label="Attendance"
          placeholder="Type your attendance"
          keyboardType="numeric"
          value={'' + attendance}
          onChangeText={setAttendance}
        />
        <Pressable style={styles.button} onPress={handlePostPress}>
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCancelPress}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#34495e',
    borderRadius: 8,
    padding: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
})