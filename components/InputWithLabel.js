import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react'

const InputWithLabel = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.label}>{props.label}</Text>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            onSubmitEditing={props.onSubmitEditing}
          />
        </View>
      );
}

export default InputWithLabel

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: 'row'
  },
    label: {
    flex: 1.2,
    padding: 8,
    fontSize: 18
  },
    input: {
    borderWidth: 1,
    flex: 2,
    padding: 8,
    fontSize: 16,
    borderRadius: 2,
  },
})