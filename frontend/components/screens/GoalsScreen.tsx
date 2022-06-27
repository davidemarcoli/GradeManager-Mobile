import React from "react";
import { View } from "react-native";

import TextField from "../atoms/TextField";

export default function GoalsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextField text={"Goals"}></TextField>
    </View>
  );
}
