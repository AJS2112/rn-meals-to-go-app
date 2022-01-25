import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

import { RestaurantInfoCard } from '../components/restaurant-info-card-component';


export default function RestaurantDetailScreen({ route }) {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const { restaurant } = route.params;

    return (
        // <SafeAreaView>
        <>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>

                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Arepa" />
                    <List.Item title="Sanguche" />
                    <List.Item title="Conflay" />

                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Pescao guisao con coco y bola e platano " />
                    <List.Item title="Mondongo" />
                    <List.Item title="Pelao" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Bollo" />
                    <List.Item title="Funche" />
                    <List.Item title="Empanada" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title="Chicha" />
                    <List.Item title="Carato e mango" />
                    <List.Item title="Guarapo e caña" />
                </List.Accordion>

            </ScrollView>
        </>
        // </SafeAreaView>
    )
}