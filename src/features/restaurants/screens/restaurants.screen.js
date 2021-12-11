import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';

const SafeArea = styled(SafeAreaView)`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1; 
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = (props) => {
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <RestaurantListContainer>
                    <RestaurantInfoCard />
                </RestaurantListContainer>
            </SafeArea>
        </>
    )
}
