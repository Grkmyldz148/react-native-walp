import React from "react";
import {
    View
} from "react-native";
import {
    BOTTOM_BAR_CONFIGS
} from "../../constants";
import {
    Icon
} from "elements";
import {
    styles
} from "./styles";
import constants from "_constants";

const {
    whiteColor,
    lightColor,
} = constants.colors;

const BottomBar = ({
    navigation,
    state
}) => {
    return <View
        style={styles.container}
    >
            {
                BOTTOM_BAR_CONFIGS.map((item, index) => {
                    const isFocused = state.index === index;
                    const focusedConfig = (status) => {
                        if (item.stackName) {
                            navigation.navigate(item.stackName, {
                                screen: item.screenName,
                                params: {},
                            });
                        }
                        else if (status) {
                            navigation.navigate(item.screenName);
                        }
                    }
                    const colorActive = isFocused ? whiteColor : lightColor;
                    return <Icon
                        key={index + "BottomBar"}
                        onPress={focusedConfig}
                        color={colorActive}
                        name={item.icon}
                        size={32}
                    />;
                })
            }
    </View>;
};
export default BottomBar;