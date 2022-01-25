import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                headerShown: false,
                //...TransitionPresets.ModalTransition 
                presentation: 'modal'
            }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={() => (
                    <View>

                        <Text>Detail</Text>
                    </View>
                )}
            />
        </RestaurantStack.Navigator>
    )
}