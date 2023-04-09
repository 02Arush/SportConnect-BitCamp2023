import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel.js';
import { useNavigation } from '@react-navigation/native';
import userList from '../userList.js'



const LoginScreen = () => {
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (userList.has(`${email}`) && userList.get(`${email}`)===password){
      nav.navigate('Home');
    }else{
      alert('Incorrect Email or Password');
     // nav.navigate('Login');
    }
  };

  const handleSignupPress = () => {
    nav.navigate('Register');
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
      <Pressable style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen

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
