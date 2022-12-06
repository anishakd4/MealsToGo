import { ThemeProvider } from 'styled-components';
import { RestaurantsScreen } from './src/features/resturants/screens/resturants.screen';
import { theme } from './src/infrastructure/theme';

import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';

// const isAndroid = Platform.OS === 'android';
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
				<RestaurantsScreen />
			</ThemeProvider>
		</>
	);
}
