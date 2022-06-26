import React, {
    useState,
    useEffect
} from "react";
import {
    View
} from "react-native";
import {
    styles
} from "./styles";
import {
    ImageSliderList,
    Loading
} from "components";


const ImageDetails = ({
    route
}) => {
    const {
        images,
        index,
        item
    } = route.params;
    const limitedImages = images.slice(0, index + 50);

    return <View
        style={styles.container}
    >
        <ImageSliderList
            datas={limitedImages}
            defaultStartIndex={index}
        />
    </View >
}
export default ImageDetails;