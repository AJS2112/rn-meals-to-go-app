import React from "react";
import { SafeAreaView } from "react-native";
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';


export default function RestaurantDetailScreen({ route }) {
    const { restaurant } = route.params;
    return (
        <SafeAreaView>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeAreaView>
    )
}