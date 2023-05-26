import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Sizes, Weights } from '../../theme/FontSizes';
import Colors from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
	display: flex;
	flex-direction: column
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
`;

export const HeaderContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	padding: 10px;
`;

export const HeaderAvatar = styled.Image`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	margin-right: 10px;
`;

export const HeaderUsername = styled.Text`
	font-size: ${Sizes.medium};
	font-weight: ${Weights.bold};
	color: ${Colors.black};
`;

export const HeaderIcon = styled(Entypo)`
	margin-left: auto;
	font-size: ${Sizes.medium};
`;

type PostImageProps = {
	width?: number;
};

export const PostImage = styled.Image<PostImageProps>`
	width: ${props => (props.width ? `${props.width}px` : '100%')};
	aspect-ratio: 1;
`;

export const FooterContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 10px;
`;

export const FooterIconContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin-bottom: 5px;
`;

type LikeIconProps = {
	isLiked: boolean;
};

export const LikeIcon = styled(AntDesign)<LikeIconProps>`
	font-size: ${Sizes.extraLarge};
	margin-right: 10px;
	color: ${props => (props.isLiked ? Colors.red : Colors.black)};
`;

export const ChatIcon = styled(Ionicons)`
	font-size: ${Sizes.extraLarge};
	margin-right: 10px;
	color: ${Colors.black};
`;

export const SendIcon = styled(Feather)`
	font-size: ${Sizes.extraLarge};
	color: ${Colors.black};
`;

export const BookmarkIcon = styled(Feather)`
	font-size: ${Sizes.extraLarge};
	margin-left: auto;
	color: ${Colors.black};
`;

export const LikedByText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
	line-height: 18px;
`;

export const BoldText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.bold};
	line-height: 18px;
`;

export const PostDescriptionText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
	line-height: 18px;
`;

export const ShowMoreLessText = styled.Text`
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
	line-height: 18px;
	margin-bottom: 3px;
`;

export const UsernameText = styled.Text`
	color: ${Colors.black};
	font-size: ${Sizes.default};
	font-weight: ${Weights.bold};
	line-height: 18px;
`;

export const ViewCommentsText = styled.Text`
	width: 100%;
	line-height: 18px;
`;

export const PublishDateText = styled.Text`
	width: 100%;
	line-height: 18px;
`;
