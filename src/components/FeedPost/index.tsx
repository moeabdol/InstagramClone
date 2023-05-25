import * as React from 'react';
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
	PostDescription,
	UsernameText,
	ViewCommentsText,
	PublishDateText,
} from './styles';
import type IPost from '../../models/Post';
import Comment from '../Comment';

type FeedPostProps = {
	post: IPost;
};

function FeedPost({ post }: FeedPostProps) {
	return (
		<Container>
			<HeaderContainer>
				<HeaderAvatar source={{ uri: post.user.image }} />
				<HeaderUsername>{post.user.username}</HeaderUsername>
				<HeaderIcon name="dots-three-horizontal" />
			</HeaderContainer>

			<PostImage source={{ uri: post.image }} />
			<FooterContainer>
				<FooterIconContainer>
					<LikeIcon name="hearto" />
					<ChatIcon name="chatbubble-outline" />
					<SendIcon name="send" />
					<BookmarkIcon name="bookmark" />
				</FooterIconContainer>

				<LikedByText>
					Like by <BoldText>moeabdol</BoldText> and{' '}
					<BoldText>{post.nofLikes} others</BoldText>
				</LikedByText>

				<PostDescription>
					<UsernameText>{post.user.username}</UsernameText> {post.description}
				</PostDescription>

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
