import React from "react";
import {FlexAlignType, StyleSheet} from "react-native";
import {Text, useTheme} from "react-native-paper"

type TextFieldProps = {
    text: string;
    secondaryText?: string;
    color?: string;
    opacity?: number;
    textSize?: number;
    fontWeight?: string;
    marginTop?: number;
    alignments?: FlexAlignType;
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
 * @param alignments - alignment of the text
 * @returns the text field component
 */
export default function TextField({
                                      text,
                                      secondaryText,
                                      color,
                                      opacity = 1,
                                      textSize = 16,
                                      fontWeight = "normal",
                                      marginTop = 0,
                                      alignments = "center"
                                  }: TextFieldProps) {

    const theme = useTheme();

    return (
        <>
            <Text
                style={
                    createStyles(opacity, textSize, color || theme.colors.text, fontWeight, marginTop, alignments || "center")
                        .primaryText
                }
            >
                {text}
            </Text>
            {secondaryText &&
                <Text
                    style={
                        createStyles(opacity, textSize - 15, color || theme.colors.text, fontWeight, marginTop, alignments || "center")
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
    marginTop: number,
    alignments: FlexAlignType
) =>
    StyleSheet.create({
        primaryText: {
            position: "relative",
            top: 0,
            marginTop: marginTop,
            fontSize: textSize,
            opacity: opacity,
            alignSelf: alignments,
            color: color,
            fontWeight: fontWeight,
        },
        secondaryText: {
            fontSize: textSize,
            opacity: opacity,
            alignSelf: alignments,
            color: color,
            fontWeight: fontWeight,
        },
    });
