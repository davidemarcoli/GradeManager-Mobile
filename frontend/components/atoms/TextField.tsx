import React from "react";
import { StyleSheet } from "react-native";
import {Text, useTheme} from "react-native-paper"

type TextFieldProps = {
  text: string;
  secondaryText?: string;
  color?: string;
  opacity?: number;
  textSize?: number;
  fontWeight?: string;
  marginTop?: string;
};

/**
 * TextField component
 * @param text - text to display
 * @param secondaryText - secondary text to display
 * @param color - color of the text
 * @param opacity - opacity of the text
 * @param textSize - size of the text
 * @param fontWeight - font weight of the text
 * @param marginTop - margin top of the text
 * @returns the text field component
 */
export default function TextField({
  text,
  secondaryText,
  color,
  opacity = 1,
  textSize = 16,
  fontWeight = "normal",
  marginTop = "0%",
}: TextFieldProps) {

    const theme = useTheme();

  return (
    <>
      <Text
        style={
          createStyles(opacity, textSize, color || theme.colors.text, fontWeight, marginTop)
            .primaryText
        }
      >
        {text}
      </Text>
        {secondaryText &&
            <Text
                style={
                    createStyles(opacity, textSize - 15, color || theme.colors.text, fontWeight, marginTop)
                        .secondaryText
                }
            >
                {secondaryText}
            </Text>
        }
    </>
  );
}

const createStyles = (
  opacity: number,
  textSize: number,
  color: string,
  fontWeight: string,
  marginTop: string
) =>
  StyleSheet.create({
    primaryText: {
      position: "relative",
      top: 0,
      marginTop: marginTop,
      fontSize: textSize,
      opacity: opacity,
      alignSelf: "center",
      color: color,
      fontWeight: fontWeight,
    },
    secondaryText: {
      fontSize: textSize,
      opacity: opacity,
      alignSelf: "center",
      color: color,
      fontWeight: fontWeight,
    },
  });
