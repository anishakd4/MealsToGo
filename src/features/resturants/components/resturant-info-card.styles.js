import { Card } from 'react-native-paper';
import styled from 'styled-components';

export const RestaurantCard = styled(Card)`
	background-color: white;
	margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
	padding: 20px;
	background-color: white;
`;

export const Address = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
	width: 15px;
	height: 15px;
	margin-right: 15px;
`;
