import React from "react";
import {
    NavigationContainer
} from "@react-navigation/native";
import {
    createStackNavigator
} from "@react-navigation/stack";
import {
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {
    ImageDetails,
    Information,
    Home
} from "pages";

const HomeBottomTab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const HomeNavigatior = () => {
    return <HomeBottomTab.Navigator
        screenOptions={screenOptions}
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
    return <NavigationContainer>
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