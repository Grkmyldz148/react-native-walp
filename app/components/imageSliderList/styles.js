import {
    StyleSheet
} from "react-native";
import utils from "utils";
import constants from "_constants";

const {
    pageColor
} = constants.colors;

const {
    screenWidth,
    screenHeight
} = utils.getScreenDimensions();

export const SPACING = 4;
export const ITEM_SIZE = screenWidth * 0.80;;
export const SPACER_ITEM_SIZE = (screenWidth - ITEM_SIZE) / 2;

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        height: screenHeight,
        width: screenWidth,
        marginBottom: 20
    },
    flatList: {
        width: "100%"
    },
    flatContainer: {
        alignItems: "center",
    },
    spaceItem: {
        width: SPACER_ITEM_SIZE - 10
    },
    animatedItemContainer: {
        elevation: 5,
        height: screenHeight,
    },
    animatedItem: {
        paddingHorizontal: 8,
        paddingVertical: 120,
        width: ITEM_SIZE,
    },
    animatedItemImage: {
        width: ITEM_SIZE - 10,
        height: "100%",
        borderRadius: 6,
        elevation: 5
    },
    button: {
        justifyContent: "space-around",
        backgroundColor: pageColor,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        width: ITEM_SIZE,
        height: 70,
        bottom: 50
    },
});