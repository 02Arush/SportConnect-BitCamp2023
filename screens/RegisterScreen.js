import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel.js';
import { useNavigation } from '@react-navigation/native';
import userList from '../userList.js'


const RegisterScreen = () => {
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      if(email==="" || password===""){
        alert("Enter valid email.");
        return; 
      }
      if (userList.has(`${email}`)){
        alert('User Exists. Please try logging in.');
        nav.navigate('Login');
        return;
      }
      userList.set(`${email}`, `${password}`);
      nav.navigate('Login');
    } else {
      alert('Passwords do not match, please try again.');
    }
  };
  return (
    <View style={styles.container}>
      <InputWithLabel
        label="Email"
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label="Confirm password"
        placeholder="Re-type your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen

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
    borderRadius: 6,
    padding: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
