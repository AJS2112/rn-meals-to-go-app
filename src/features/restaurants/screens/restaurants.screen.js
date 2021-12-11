import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';
import { Spacer } from "../../../components/spacer/spacer.component";

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
    return (
        <>
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <FlatList
                    data={[
                        { name: 1 },
                        { name: 2 },
                        { name: 3 },
                        { name: 4 },
                        { name: 5 },
                        { name: 6 },
                        { name: 7 },
                        { name: 8 },
                    ]}
                    renderItem={() => <>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard />
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

