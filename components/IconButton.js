import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 


// DEFAULT VALUES PROVIDED FOR ALL PLACEHOLDERS
// BY DEFAULT, USES IONICONS SO JUST USE IONICON NAMES FOR SIMPLICTY 
// UNLESS YOU SPECIFICALLY NEED ICONS FROM OTHER ICON FAMILIES
// USE https://icons.expo.fyi/ 


const IconButton = ({
  iconFamily = Ionicons,
  iconName = "md-checkmark-circle-outline",
  iconSize = 32,
  iconColor = "black",
  onClick = () => {console.log('clicked')},
}) => {
  const Icon = iconFamily; 
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon style={{padding: 5}} name={iconName} size={iconSize} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
