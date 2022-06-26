import {
    StyleSheet
} from "react-native";
import constants from "_constants";

const {
    pageColor
} = constants.colors;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: pageColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
});