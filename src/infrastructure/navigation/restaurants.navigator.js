import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { RestaurantDetailScreen } from '../../features/resturants/screens/restaurant-detail.screen';
import { RestaurantsScreen } from '../../features/resturants/screens/resturants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.ModalPresentationIOS,
			}}>
			<RestaurantStack.Screen
				name='RestaurantsScreen'
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name='RestaurantDetail'
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
