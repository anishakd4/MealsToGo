import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
	padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
	if (!favourites.length) {
		return null;
	}
	return (
		<FavouritesWrapper>
			<Text variant='caption'>Favourites</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favourites.map((restaurant) => {
					const key = restaurant.name;
					return (
						<TouchableOpacity
							key={key}
							onPress={() =>
								onNavigate('RestaurantDetail', {
									restaurant,
								})
							}>
							<CompactRestaurantInfo restaurant={restaurant} />
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</FavouritesWrapper>
	);
};
