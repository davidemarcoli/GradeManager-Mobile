import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export type IconSizeProps = {
    iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
    size: IconSizeProps['iconSizes'];
    name: string;
    color?: string;
}

export const IconSizes = {
    small: 13,
    medium: 18,
    large: 23,
    footer: 26,
    extraLarge: 27,
};

export const MaterialIcon = ({size="medium", name, color="black"}: IconProps) => (
    <MaterialCommunityIcons name={name} size={IconSizes[size]} color={color} />
);