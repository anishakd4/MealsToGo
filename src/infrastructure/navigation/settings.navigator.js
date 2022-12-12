import {
	CardStyleInterpolators,
	createStackNavigator,
} from '@react-navigation/stack';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				headerShown: false,
			}}>
			<SettingsStack.Screen
				options={{
					header: () => null,
				}}
				name='SettingsScreen'
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
		</SettingsStack.Navigator>
	);
};
