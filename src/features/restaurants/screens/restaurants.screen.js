import React, { useContext } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;



const RestaurantListContainer = styled(FlatList)`
    padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
margin-left:-25px
`;

const LoadingContainer = styled.View`
    position:absolute;
    top:50%;
    left:50%;
`;

export const RestaurantScreen = (props) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <>
            <SafeArea>
                {isLoading && (
                    <LoadingContainer>
                        <Loading
                            size={50}
                            style={{ marginLeft: -25 }}
                            animating={true}
                            color={Colors.blue300}
                        />
                    </LoadingContainer>
                )}
                <Search />
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

