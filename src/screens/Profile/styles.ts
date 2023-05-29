import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Sizes } from '../../theme/FontSizes';
import Colors from '../../theme/Colors';

export const PostsFlatList = styled.FlatList`
	margin: 0 -1px;
`;

export const ImageContainer = styled.View`
	position: relative;
	flex: 0 1 33.33%;
	padding: 1px;
`;

export const PostImage = styled.Image`
	flex: 1;
	aspect-ratio: 1;
`;

export const CollectionIcon = styled(MaterialIcons)`
	position: absolute;
	top: 5px;
	right: 5px;
	font-size: ${Sizes.medium};
	color: ${Colors.white};
`;
