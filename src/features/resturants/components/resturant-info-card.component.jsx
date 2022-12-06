import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import open from '../../../assets/open';
import star from '../../../assets/star';
import { Text } from '../../../components/typography/text.component';
import {
	Address,
	Icon,
	Info,
	Rating,
	RestaurantCard,
	RestaurantCardCover,
} from './resturant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(rating));
	return (
		<RestaurantCard elevation={5}>
			<RestaurantCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant='label'>{name}</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Rating>
						{ratingArray.map((_, index) => (
							<SvgXml key={index} xml={star} width={20} height={20} />
						))}
					</Rating>
					<View style={{ flexDirection: 'row' }}>
						{isClosedTemporarily && (
							<Text variant='error'>CLOSED TEMPORARILY</Text>
						)}
						{isOpenNow && (
							<SvgXml
								xml={open}
								width={20}
								height={20}
								style={{ marginStart: 15 }}
							/>
						)}
						<Icon source={{ uri: icon }} />
					</View>
				</View>
				<Address>{address}</Address>
			</Info>
		</RestaurantCard>
	);
};
