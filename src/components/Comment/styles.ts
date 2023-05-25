import styled from 'styled-components/native';
import Colors from '../../theme/Colors';
import { Sizes, Weights } from '../../theme/FontSizes';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

export const CommentBody = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
	line-height: 18px;
	flex: 1;
`;

export const UsernameText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.bold};
	line-height: 18px;
`;

export const CommentLikeIcon = styled(AntDesign)`
	font-size: ${Sizes.small};
	margin-right: 10px;
	color: ${Colors.black};
	margin: 0 10px;
`;
