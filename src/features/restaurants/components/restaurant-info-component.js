import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            ""
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isCloseTemporarily
    } = restaurant;
    return (
        <Text> info {name} </Text>
    )
}
