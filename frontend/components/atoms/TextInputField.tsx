import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

type TextInputFieldProps = {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  marginTop?: number;
  onChangeText?: (text: string) => void;
};

export default function TextInputField({
  label,
  defaultValue = "",
  placeholder = "",
  secureTextEntry = false,
  marginTop = 0,
  onChangeText = () => {},
}: TextInputFieldProps) {
  const theme = useTheme();
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);
  const [rightIcon, setRightIcon] = useState("eye");

  return (
    <View>
      <TextInput
        style={createStyles(marginTop).textInput}
        label={label}
        value={defaultValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        selectionColor={theme.colors.accent}
        underlineColor={theme.colors.accent}
        activeOutlineColor={theme.colors.accent}
        activeUnderlineColor={theme.colors.accent}
      ></TextInput>
    </View>
  );
}

const createStyles = (marginTop?: number) =>
  StyleSheet.create({
    textInput: {
      marginTop: marginTop,
    },
  });
