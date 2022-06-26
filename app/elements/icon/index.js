import React from "react";
import {
    TouchableOpacity
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import constants from "_constants";

const {
    whiteColor
} = constants.colors;

const Icon = ({
    color = whiteColor,
    size = 32,
    onPress,
    name
}) => {
    return <TouchableOpacity
        onPress={onPress}
    >
        <MaterialCommunityIcons
            color={color}
            name={name}
            size={size}
        />
    </TouchableOpacity>
};
export default Icon;