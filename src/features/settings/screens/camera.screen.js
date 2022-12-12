import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, CameraType } from 'expo-camera';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
	width: 100%;
	height: 100%;
`;

const CameraContainer = styled.View`
	width: 100%;
	height: 100%;
`;

const CameraButton = styled(Button).attrs({
	mode: 'contained',
	icon: 'camera',
})`
	position: absolute;
	top: 525px;
	left: 140px;
`;

export const CameraScreen = ({ navigation }) => {
	const cameraRef = useRef();
	const [hasPermission, setHasPermission] = useState(null);
	const { user } = useContext(AuthenticationContext);

	const snap = async () => {
		if (cameraRef && cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
			navigation.goBack();
		}
	};

	useEffect(() => {
		(async () => {
			const { granted } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(granted);
		})();
	}, []);

	if (hasPermission === false) {
		return <CustomText>No access to camera</CustomText>;
	}

	return (
		<CameraContainer>
			<ProfileCamera
				ref={(camera) => (cameraRef.current = camera)}
				ratio={'16:9'}
				type={CameraType.front}
				onCameraReady={() => {
					console.log('Camera Ready');
				}}></ProfileCamera>

			<CameraButton onPress={snap}>Snap!</CameraButton>
		</CameraContainer>
	);
};
