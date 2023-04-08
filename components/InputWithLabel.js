import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react'

const InputWithLabel = (props) => {
    return (
        <View style={{padding: 4, flexDirection: 'row'}}>
          <Text style={{flex: 1.2, padding: 8, fontSize: 18}}>{props.label}</Text>
          <TextInput
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            onSubmitEditing={props.onSubmitEditing}
            style={{borderWidth: 1, flex: 2, padding: 8, fontSize: 16}}
          />
        </View>
      );
}

export default InputWithLabel

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        fontSize: 16,
        borderRadius: 8,
      },
})