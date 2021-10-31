import React from "react";
import {
    NavigationContainer,
    DefaultTheme
} from "@react-navigation/native";
import {
    createStackNavigator
} from "@react-navigation/stack";
import {
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {
    BottomBar,
} from "./components";
import {
    ImageDetails,
    Information,
    Home
} from "pages";
import constants from "_constants";

const HomeBottomTab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: constants.colors.pageColor,
    },
};

const HomeNavigatior = () => {
    return <HomeBottomTab.Navigator
        screenOptions={screenOptions}
        tabBar={props => <BottomBar  {...props} />}
    >
        <HomeBottomTab.Screen
            name="Home"
            component={Home}
        />
        <HomeBottomTab.Screen
            name="Information"
            component={Information}
        />
    </HomeBottomTab.Navigator>
}

const Navigation = () => {
    return <NavigationContainer
        theme={navigationTheme}
    >
        <MainStack.Navigator
            screenOptions={screenOptions}
        >
            <MainStack.Screen
                name="Home"
                component={HomeNavigatior}
            />
            <MainStack.Screen
                name="ImageDetails"
                component={ImageDetails}
            />
        </MainStack.Navigator>
    </NavigationContainer>
}
export default Navigation;