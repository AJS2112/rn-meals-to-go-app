import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from "./restaurants.navigator";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings'
}

const SettingsScreen = () => <Text>Settings</Text>;
const MapScreen = () => <Text>Map</Text>;

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ color, size }) => {
            return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false
    }
}

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={createScreenOptions}
        >
            <Tab.Screen name="RestaurantStack" component={RestaurantsNavigator} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    </NavigationContainer>
);