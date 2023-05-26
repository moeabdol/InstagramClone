import * as React from 'react';
import { useState } from 'react';
import {
	Container,
	HeaderContainer,
	HeaderAvatar,
	HeaderUsername,
	HeaderIcon,
	PostImage,
	FooterContainer,
	FooterIconContainer,
	LikeIcon,
	ChatIcon,
	SendIcon,
	BookmarkIcon,
	LikedByText,
	BoldText,
	PostDescriptionText,
	ShowMoreLessText,
	UsernameText,
	ViewCommentsText,
	PublishDateText,
} from './styles';
import type IPost from '../../models/Post';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import { FlatList, useWindowDimensions } from 'react-native';

type FeedPostProps = {
	post: IPost;
};

function FeedPost({ post }: FeedPostProps) {
	const { width } = useWindowDimensions();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	return (
		<Container>
			<HeaderContainer>
				<HeaderAvatar source={{ uri: post.user.image }} />
				<HeaderUsername>{post.user.username}</HeaderUsername>
				<HeaderIcon name="dots-three-horizontal" />
			</HeaderContainer>

			{post.image && (
				<DoublePressable onDoublePress={() => setIsLiked(prev => !prev)}>
					<PostImage source={{ uri: post.image }} />
				</DoublePressable>
			)}

			{post.images && (
				<FlatList
					horizontal
					pagingEnabled
					data={post.images}
					renderItem={({ item }) => (
						<DoublePressable onDoublePress={() => setIsLiked(prev => !prev)}>
							<PostImage source={{ uri: item }} width={width} />
						</DoublePressable>
					)}
				/>
			)}

			<FooterContainer>
				<FooterIconContainer>
					<LikeIcon
						name={isLiked ? 'heart' : 'hearto'}
						isLiked={isLiked}
						onPress={() => setIsLiked(prev => !prev)}
					/>
					<ChatIcon name="chatbubble-outline" />
					<SendIcon name="send" />
					<BookmarkIcon name="bookmark" />
				</FooterIconContainer>

				<LikedByText>
					Like by <BoldText>moeabdol</BoldText> and{' '}
					<BoldText>{post.nofLikes} others</BoldText>
				</LikedByText>

				<PostDescriptionText numberOfLines={isExpanded ? 0 : 3}>
					<UsernameText>{post.user.username}</UsernameText> {post.description}
				</PostDescriptionText>

				<ShowMoreLessText onPress={() => setIsExpanded(prev => !prev)}>
					{isExpanded ? 'Show less' : 'Show more'}
				</ShowMoreLessText>

				<ViewCommentsText>
					View all {post.nofComments} comments
				</ViewCommentsText>

				{post.comments.map(comment => (
					<Comment key={comment.id} comment={comment} />
				))}

				<PublishDateText>{post.createdAt}</PublishDateText>
			</FooterContainer>
		</Container>
	);
}

export default FeedPost;
