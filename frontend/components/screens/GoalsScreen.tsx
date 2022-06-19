import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import PasswordInputField from "../molecules/PasswordInputField";
import TextField from "../atoms/TextField";
import TextInputField from "../atoms/TextInputField";

export default function GoalsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextField text={"Goals"}></TextField>
      <PasswordInputField />
    </View>
  );
}
