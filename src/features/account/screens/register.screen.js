import React, { useContext, useState } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from '../components/account.styles';

export const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatedPassword, setRepeatedPassword] = useState('');
	const { onRegister, error, isLoading } = useContext(AuthenticationContext);
	return (
		<AccountBackground>
			<AccountCover />
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthInput
					label='E-mail'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(u) => setEmail(u)}
				/>
				<AuthInput
					label='Password'
					value={password}
					textContentType='password'
					secureTextEntry
					autoCapitalize='none'
					onChangeText={(p) => setPassword(p)}
				/>
				<AuthInput
					label='Repeat Password'
					value={repeatedPassword}
					textContentType='password'
					secureTextEntry
					autoCapitalize='none'
					onChangeText={(p) => setRepeatedPassword(p)}
				/>
				{error && (
					<ErrorContainer size='large'>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				)}
				{!isLoading ? (
					<AuthButton
						icon='email'
						mode='contained'
						onPress={() => onRegister(email, password, repeatedPassword)}>
						Register
					</AuthButton>
				) : (
					<ActivityIndicator animating={true} color={Colors.blue300} />
				)}
			</AccountContainer>
			<AuthButton mode='contained' onPress={() => navigation.goBack()}>
				Back
			</AuthButton>
		</AccountBackground>
	);
};
