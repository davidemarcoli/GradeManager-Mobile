import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { grey100 } from "react-native-paper/lib/typescript/styles/colors";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
import { IconSizeProps, MaterialIcon } from "./MaterialIcon";

type TextInputFieldProps = {
  label: string;
  defaultValue?: string;
  numeric?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  marginTop?: number;
  width?: string;
  padding?: number;
  onChangeText?: (text: string) => void;
  subtext?: {
    text: string;
    color?: string;
    fontSize?: number;
    marginTop?: number;
  };
  mainIcon?: {
    name?: string;
    size?: IconSizeProps["iconSizes"];
    color?: string;
    padding?: number;
    marginTop?: string;
  };
  icon?: {
    name?: string;
    size?: IconSizeProps["iconSizes"];
    color?: string;
    padding?: number;
    marginTop?: string;
  };
};

export default function TextInputField({
  label,
  defaultValue = "",
  numeric = false,
  placeholder = "",
  secureTextEntry = false,
  marginTop = 0,
  width = "100%",
  padding = 0,
  onChangeText = () => {},
  mainIcon = { name: "google", size: "medium", color: "grey" },
  icon,
  subtext = { text: "", color: "grey", fontSize: 10, marginTop: 10 },
}: TextInputFieldProps) {
  const theme = useTheme();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  return (
    <>
      {icon ? (
        <View>
          <View style={createStyles(marginTop, width, padding).field}>
            {mainIcon ? (
              <MaterialCommunityIcons
                style={iconStyle(mainIcon.marginTop).icon}
                name={mainIcon.name}
                size={22}
                color={"grey"}
              />
            ) : null}
            <TextInput
              keyboardType={numeric ? "numeric" : "default"}
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
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color={"grey"}
              />
            </Pressable>
          </View>
          <Text style={subtextStyle.text}>{subtext?.text}</Text>
        </View>
      ) : null}
      {!icon ? (
        <View>
          <View style={createStyles(marginTop, width, padding).field}>
            {mainIcon ? (
              <MaterialCommunityIcons
                style={iconStyle(mainIcon.marginTop).icon}
                name={mainIcon.name}
                size={22}
                color={"grey"}
              />
            ) : null}
            <TextInput
              keyboardType={numeric ? "numeric" : "default"}
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
          <Text style={subtextStyle.text}>{subtext?.text}</Text>
        </View>
      ) : null}
    </>
  );
}

const createStyles = (marginTop?: number, width?: string, padding?: number) =>
  StyleSheet.create({
    field: {
      flexDirection: "row",
      width: width,
    },
    textInput: {
      marginTop: marginTop,
      width: width,
      paddingLeft: 25,
    },
    icon: {
      marginTop: "15%",
      right: "40%",
    },
    primaryicon: {
      marginTop: "5%",
      right: "40%",
    },
  });

const subtextStyle = StyleSheet.create({
  text: {
    color: "grey",
  },
});

const iconStyle = (marginTop?: string) => StyleSheet.create({
  icon: {
    marginTop: marginTop || "14%",
    left: "5%",
    marginRight: "-7.5%",
    zIndex: 1,
  },
});
