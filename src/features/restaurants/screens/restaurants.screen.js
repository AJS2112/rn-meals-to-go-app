import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SafeArea = styled(SafeAreaView)`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(FlatList)`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = (props) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <FlatList
                    data={restaurants}
                    renderItem={({ item }) => <>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    </>
                    }
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={{ padding: 16 }}
                />

            </SafeArea>
        </>
    )
}

