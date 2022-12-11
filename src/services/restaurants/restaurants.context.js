import { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/location.context';
import {
	restaurantsRequest,
	restaurantsTransform,
} from './restaurants.services';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);

	const retrieveRestaurants = (loc) => {
		setIsLoading(true);
		setRestaurants([]);
		setTimeout(() => {
			restaurantsRequest(loc)
				.then(restaurantsTransform)
				.then((results) => {
					setRestaurants(results);
					setIsLoading(false);
				})
				.catch((error) => {
					setError(error);
					setIsLoading(false);
				});
		}, 2000);
	};

	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

	return (
		<RestaurantsContext.Provider
			value={{ restaurants: restaurants, isLoading: isLoading, error: error }}>
			{children}
		</RestaurantsContext.Provider>
	);
};
