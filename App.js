import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantsScreen } from './src/features/resturants/screens/resturants.screen';

// const isAndroid = Platform.OS === 'android';

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Settings: 'md-settings',
	Maps: 'md-map',
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
	};
};

export const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);
export const Maps = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);

const Tab = createBottomTabNavigator();

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});
	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator screenOptions={createScreenOptions}>
						<Tab.Screen
							name='Restaurants'
							component={RestaurantsScreen}
							options={{ headerShown: false }}
						/>
						<Tab.Screen
							name='Maps'
							component={Maps}
							options={{ headerShown: false }}
						/>
						<Tab.Screen
							name='Settings'
							component={Settings}
							options={{ headerShown: false }}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</>
	);
}
