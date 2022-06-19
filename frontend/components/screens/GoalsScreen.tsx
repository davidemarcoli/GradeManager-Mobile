import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import TextField from "../atoms/TextField";
import TextInputField from "../atoms/TextInputField";

export default function GoalsScreen() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextField text={"Goals"}></TextField>
      <TextInputField
        label={"Password"}
        secureTextEntry={passwordVisibility}
        defaultValue={data.password}
        onChangeText={(value: string) =>
          setData({
            ...data,
            password: value,
          })
        }
        marginTop={20}
      ></TextInputField>
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
      </Pressable>
    </View>
  );
}
