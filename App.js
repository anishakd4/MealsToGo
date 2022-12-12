import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
	apiKey: 'AIzaSyD7Etz_GEMn7rON9qeHmLUqYl9ByrGQT1g',
	authDomain: 'mealstogo-9b5c9.firebaseapp.com',
	projectId: 'mealstogo-9b5c9',
	storageBucket: 'mealstogo-9b5c9.appspot.com',
	messagingSenderId: '193083665253',
	appId: '1:193083665253:web:8e52c1732509cace710f8c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const isAndroid = Platform.OS === 'android';

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
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
		</>
	);
}
