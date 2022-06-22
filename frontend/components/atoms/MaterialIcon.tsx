import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {MaterialIcons} from "@expo/vector-icons/";

export type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
    size: IconSizeProps['iconSizes'];
    name: string;
    color?: string;
    iconType?: "MaterialIcons" | "MaterialCommunityIcons";
    opacity?: number;
}

export const IconSizes = {
    small: 13,
    medium: 18,
    large: 23,
    footer: 26,
    extraLarge: 27,
};

export function MaterialIcon({size = "medium", name, color = "black", iconType="MaterialCommunityIcons", opacity=1}: IconProps) {

    switch (iconType) {
        case "MaterialCommunityIcons":
            return (<MaterialCommunityIcons name={name} size={IconSizes[size]} color={color} style={{opacity: opacity}}/>)
        case "MaterialIcons":
            return (<MaterialIcons name={name} size={IconSizes[size]} color={color} style={{opacity: opacity}}/>)
    }


};