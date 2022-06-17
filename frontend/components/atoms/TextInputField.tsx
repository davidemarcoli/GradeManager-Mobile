import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { IconSizeProps, MaterialIcon } from "./MaterialIcon";
import { FloatingLabelInput } from "react-native-floating-label-input";

type TextInputFieldProps = {
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  textSize?: number;
  textColor?: string;
  fontWeight?: string;
  bottomBorderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  marginTop?: number;
  onChangeText?: (text: string) => void;
  icon?: {
    name: string;
    size: IconSizeProps["iconSizes"];
    color?: string;
    padding?: number;
  };
};

export default function TextInputField({
  value,
  placeholder,
  textSize,
  textColor,
  fontWeight,
  bottomBorderColor,
  borderRadius,
  backgroundColor,
  marginTop,
}: TextInputFieldProps) {
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);

  return (
    <FloatingLabelInput
      label={"label"}
      isPassword
      togglePassword={show}
      value={cont}
      onChangeText={(value) => setCont(value)}
      customShowPasswordComponent={<Text>Show</Text>}
      customHidePasswordComponent={<Text>Hide</Text>}
    />
  );
}

const createStyles = (
  textSize?: number,
  textColor?: string,
  fontWeight?: string,
  bottomBorderColor?: string,
  borderRadius?: number,
  backgroundColor?: string,
  marginTop?: number
) =>
  StyleSheet.create({
    textInput: {
      position: "relative",
      top: 0,
      marginTop: marginTop,
      fontSize: textSize,
      alignSelf: "center",
      fontWeight: fontWeight,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
