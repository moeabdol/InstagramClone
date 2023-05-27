import * as React from 'react';
import { useState, useRef } from 'react';
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
	CarouselContainer,
	DotIndicatorContainer,
	Dot,
	VideoContainer,
	VideoPlayer,
	MuteButton,
	MuteIcon,
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
	const [activeIndex, setActiveIndex] = useState(0);
	const [isMuted, setIsMuted] = useState(true);

	const viewabilityConfig = {
		itemVisiblePercentThreshold: 51,
	};

	const onViewableItemsChanged = useRef(({ viewableItems }) => {
		if (viewableItems.length > 0) setActiveIndex(viewableItems[0].index);
	});

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
				<CarouselContainer>
					<FlatList
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						data={post.images}
						renderItem={({ item }) => (
							<DoublePressable onDoublePress={() => setIsLiked(prev => !prev)}>
								<PostImage source={{ uri: item }} width={width} />
							</DoublePressable>
						)}
						viewabilityConfig={viewabilityConfig}
						onViewableItemsChanged={onViewableItemsChanged.current}
					/>
					<DotIndicatorContainer>
						{post.images.map((_, i) => (
							<Dot key={i} active={i === activeIndex ? true : false} />
						))}
					</DotIndicatorContainer>
				</CarouselContainer>
			)}

			{post.video && (
				<VideoContainer>
					<DoublePressable onDoublePress={() => setIsLiked(prev => !prev)}>
						<VideoPlayer
							source={{ uri: post.video }}
							resizeMode="cover"
							repeat
							muted={isMuted}
						/>
					</DoublePressable>
					<MuteButton onPress={() => setIsMuted(prev => !prev)}>
						<MuteIcon name={isMuted ? 'volume-mute' : 'volume-medium'} />
					</MuteButton>
				</VideoContainer>
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
