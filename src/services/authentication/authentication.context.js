import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../../../App';
import { loginRequest, registrationRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	onAuthStateChanged(auth, (usr) => {
		if (usr) {
			setUser(usr);
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	});

	const onLogin = (email, password) => {
		setIsLoading(true);
		loginRequest(email, password)
			.then((u) => {
				setUser(u);
				setIsLoading(false);
			})
			.catch((e) => {
				setIsLoading(false);
				setError(e.toString());
			});
	};

	const onRegister = (email, password, repeatedPassword) => {
		setIsLoading(true);
		registrationRequest(email, password)
			.then((u) => {
				setUser(u);
				setIsLoading(false);
			})
			.catch((e) => {
				console.log({ e });
				setIsLoading(false);
				setError(e.toString());
			});
	};

	const onLogout = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated: !!user,
				user,
				isLoading,
				error,
				onLogin,
				onRegister,
				onLogout,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
};
