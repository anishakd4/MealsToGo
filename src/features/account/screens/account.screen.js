import LottieView from 'lottie-react-native';
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AnimationWrapper,
	AuthButton,
	Title,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../assets/watermelon')}
				/>
			</AnimationWrapper>
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthButton
					icon='email'
					mode='contained'
					onPress={() => navigation.navigate('Login')}>
					Login
				</AuthButton>
				<AuthButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate('Register')}>
					Register
				</AuthButton>
			</AccountContainer>
		</AccountBackground>
	);
};
