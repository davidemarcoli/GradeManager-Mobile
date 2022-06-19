import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, View } from "react-native";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import TextInputField from "../atoms/TextInputField";

export default function PasswordInputField() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  return (
    <View>
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
