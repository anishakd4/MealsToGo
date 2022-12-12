import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../../App';

export const loginRequest = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);

export const registrationRequest = (email, password) =>
	createUserWithEmailAndPassword(auth, email, password);
