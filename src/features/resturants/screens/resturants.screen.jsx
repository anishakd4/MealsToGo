import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/resturant-info-card.component';

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
	background-color: white;
	padding: ${(props) => props.theme.space[3]};
	flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const RestaurantsScreen = () => {
	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<RestaurantListContainer>
				{/* <FlatList
					data={[{ name: 1 }, { name: 2 }]}
					renderItem={() => <RestaurantInfoCard />}
					keyExtractor={(item) => item.name}
					contentContainerStyle={{ padding: 16 }}
				/> */}
				<RestaurantList
					data={[
						{ name: 1 },
						{ name: 2 },
						{ name: 3 },
						{ name: 4 },
						{ name: 5 },
						{ name: 6 },
					]}
					renderItem={() => <RestaurantInfoCard />}
					keyExtractor={(item) => item.name}
				/>
			</RestaurantListContainer>
		</SafeArea>
	);
};
