import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import type IComment from '../../models/Comment.d';
import Colors from '../../theme/Colors';
import { Sizes, Weights } from '../../theme/FontSizes';

export const ContainerView = styled.View`
	flex: 1;
`;

export const CommentsFlatList = styled(
	FlatList as new (props: FlatListProps<IComment>) => FlatList<IComment>
)`
	padding: 10px 0 10px 10px;
`;

export const InputContainerView = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	padding: 5px;
	border-top-width: 1px;
	border-top-color: ${Colors.borderGrey};
`;

export const AvatarImage = styled.Image`
	width: 40px;
	aspect-ratio: 1;
	border-radius: 20px;
`;

export const CommentTextInput = styled.TextInput`
	flex: 1;
	border: 1px solid ${Colors.borderGrey};
	border-radius: 25px;
	padding: 5px 50px 5px 10px;
	margin-left: 5px;
`;

export const PostText = styled.Text`
	position: absolute;
	bottom: 17px;
	right: 20px;
	font-size: ${Sizes.small};
	font-weight: ${Weights.full};
	color: ${Colors.primary};
`;
