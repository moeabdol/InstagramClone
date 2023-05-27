import styled from 'styled-components/native';
import Colors from '../../theme/Colors';
import { Sizes, Weights } from '../../theme/FontSizes';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const ContainerView = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

export const AvatarImage = styled.Image`
	width: 40px;
	aspect-ratio: 1;
	border-radius: 25px;
	margin-right: 10px;
`;

export const TextView = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	flex: 1;
`;

export const CommentText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
	line-height: 18px;
`;

export const UsernameText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.bold};
	line-height: 18px;
`;

export const CommentActionsView = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 10px;
`;

export const CommentActionText = styled.Text`
	margin-right: 5px;
`;

export const CommentLikePressable = styled.Pressable`
	margin-right: 10px;
`;

type CommentLikeIconProps = {
	isLiked: boolean;
};

export const CommentLikeIcon = styled(AntDesign)<CommentLikeIconProps>`
	font-size: ${Sizes.small};
	color: ${props => (props.isLiked ? Colors.red : Colors.black)};
`;
