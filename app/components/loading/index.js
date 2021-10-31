import React from "react";
import {
    ActivityIndicator,
    View
} from "react-native";
import {
    styles
} from "./styles";
import constants from "_constants";

const {
    primaryColor
} = constants.colors;

const Loading = () => {
    return <View
        style={styles.container}
    >
        <ActivityIndicator
            size={"large"}
            color={primaryColor}
        />
    </View>;
};
export default Loading;