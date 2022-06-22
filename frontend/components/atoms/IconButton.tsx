import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconSizeProps, MaterialIcon } from "./MaterialIcon";
import TextField from "./TextField";

type IconButtonProps = {
    onPress: () => void;
    icon?: {
        name: string;
        size: IconSizeProps['iconSizes'];
        color?: string;
        padding?: number;
        opacity: number;
        iconType: "MaterialIcons" | "MaterialCommunityIcons"
    };
    text?: {
        text: string,
        color?: string;
        size?: number;
        weight?: string;
        opacity?: number;
    };
    backgroundColor?: string;
    borderRadius?: number;
    border?: {
        width: number;
        color: string;
    },
    sameRow?: boolean;
    height?: number;
    marginTop?: number;
};

export default function IconButton({
  onPress,
  icon,
  text,
  backgroundColor = "white",
  borderRadius = 0,
  border,
  sameRow = false,
  height,
  marginTop,
}: IconButtonProps) {
  const styleSheet = styles({
    onPress,
    icon,
    text,
    backgroundColor: backgroundColor,
    borderRadius,
    border,
    sameRow,
  });

  let additionalStyles = {};

  if (height) {
    additionalStyles = { ...additionalStyles, height };
  }
  if (marginTop) {
    additionalStyles = { ...additionalStyles, marginTop };
  }

    return (
        <TouchableOpacity style={[styleSheet.container, styleSheet.flex, {
            backgroundColor: backgroundColor,
            borderRadius: borderRadius, ...additionalStyles
        }]} onPress={onPress}>
            {icon && <View style={styleSheet.icon}>
                <MaterialIcon iconType={icon.iconType} size={icon.size} name={icon.name} color={icon.color} opacity={icon.opacity}></MaterialIcon>
            </View>}
            {text && <TextField text={text.text} color={text.color} fontWeight={text.weight}
                                textSize={text.size} opacity={text.opacity}></TextField>}
        </TouchableOpacity>
    );
}

const styles = (props: IconButtonProps) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderColor: props.border ? props.border.color : "black",
      borderWidth: props.border ? props.border.width : 0,
    },
    flex: {
        flex: props.sameRow ? 1 : 0,
        flexDirection: props.sameRow ? "row" : "column"
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: props.text?.color ? props.text.color : "black",
    },
    icon: {
      marginRight: props.text ? 0 : 0,
      paddingRight: props.icon?.padding ? props.icon.padding : 0,
    },
  });
