import React, { useContext, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { MapCallout } from '../components/map-callout.component';
import { Search } from '../components/search.component';

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;
export const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { restaurants = [] } = useContext(RestaurantsContext);
	const [latDelta, setLatDelta] = useState(0);
	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northeastlat = viewport.northeast.lat;
		const southwestlat = viewport.southwest.lat;
		setLatDelta(northeastlat - southwestlat);
	}, [location, viewport]);

	return (
		<>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}>
				{restaurants.map((restaurant) => {
					return (
						<Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng,
							}}>
							<Callout
								onPress={() =>
									navigation.navigate('RestaurantDetail', { restaurant })
								}>
								<MapCallout restaurant={restaurant} />
							</Callout>
						</Marker>
					);
				})}
			</Map>
		</>
	);
};
