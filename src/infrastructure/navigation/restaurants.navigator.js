import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{ headerShown: false }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}
            />
        </RestaurantStack.Navigator>
    )
}