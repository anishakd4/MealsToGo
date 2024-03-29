import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../../resturants/components/restaurant-list.styles';
import { RestaurantInfoCard } from '../../resturants/components/resturant-info-card.component';

const NoFavouritesArea = styled(SafeArea)`
	align-items: center;
	justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
	const { favourites } = useContext(FavouritesContext);

	return favourites.length ? (
		<SafeArea>
			<RestaurantList
				data={favourites}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('RestaurantDetail', {
									restaurant: item,
								})
							}>
							<RestaurantInfoCard restaurant={item} />
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.name}
			/>
		</SafeArea>
	) : (
		<NoFavouritesArea>
			<Text center>No favourites yet</Text>
		</NoFavouritesArea>
	);
};
