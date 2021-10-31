import {
    StyleSheet
} from "react-native";
import constants from "_constants";

const {
    darkColor,
} = constants.colors;

export const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        backgroundColor: darkColor,
        flexDirection: "row",
        alignItems: "center",
        position: 'absolute',
        borderRadius: 100,
        height: 70,
        bottom: 20,
        right: 60,
        left: 60
    },
});