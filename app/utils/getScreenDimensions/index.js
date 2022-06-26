import {
    Dimensions
} from "react-native";

const getScreenDimensions = () => {
    const {
        height,
        width
    } = Dimensions.get("window");
    return {
        screenHeight: height,
        screenWidth: width
    };
};

export default getScreenDimensions;