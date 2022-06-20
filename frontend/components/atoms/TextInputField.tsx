import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import { IconSizeProps, MaterialIcon } from "./MaterialIcon";

type TextInputFieldProps = {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  marginTop?: number;
  width?: string;
  padding?: number;
  onChangeText?: (text: string) => void;
  icon?: {
    name?: string;
    size?: IconSizeProps["iconSizes"];
    color?: string;
    padding?: number;
  };
};

export default function TextInputField({
  label,
  defaultValue = "",
  placeholder = "",
  secureTextEntry = false,
  marginTop = 0,
  width = "100%",
  padding = 0,
  onChangeText = () => {},
  icon,
}: TextInputFieldProps) {
  const theme = useTheme();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  return (
    <>
      {icon && (
        <View style={createStyles(marginTop, width, padding).field}>
          <TextInput
            style={createStyles(marginTop, width, padding).textInput}
            label={label}
            value={defaultValue}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={passwordVisibility}
            selectionColor={theme.colors.accent}
            underlineColor={theme.colors.accent}
            activeOutlineColor={theme.colors.accent}
            activeUnderlineColor={theme.colors.accent}
          ></TextInput>
          <Pressable
            onPress={handlePasswordVisibility}
            style={createStyles(marginTop, width, padding).icon}
          >
            <MaterialCommunityIcons name={rightIcon} size={22} color={"grey"} />
          </Pressable>
        </View>
      )}
      {!icon && (
        <View>
          <TextInput
            style={createStyles(marginTop, width, padding).textInput}
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
      )}
    </>
  );
}

const createStyles = (marginTop?: number, width?: string, padding?: number) =>
  StyleSheet.create({
    field: {
      flexDirection: "row",
    },
    textInput: {
      marginTop: marginTop,
      width: width,
      padding: padding,
    },
    icon: {
      marginTop: "15%",
      right: "25%",
    },
  });
