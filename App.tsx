import React from 'react';
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
	CommentsContainer,
	Comment,
	CommentLikeIcon,
	PublishDateText,
} from './App.styles';
import { SafeAreaView, ScrollView } from 'react-native';

function App() {
	return (
		<SafeAreaView>
			<Container>
				<ScrollView>
					<HeaderContainer>
						<HeaderAvatar
							source={{
								uri: 'https://i.pinimg.com/originals/9c/e2/03/9ce2033132083598eee5c59e58571f82.jpg',
							}}
						/>
						<HeaderUsername>moeabdol</HeaderUsername>
						<HeaderIcon name="dots-three-horizontal" />
					</HeaderContainer>

					<PostImage
						source={{
							uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
						}}
					/>

					<FooterContainer>
						<FooterIconContainer>
							<LikeIcon name="hearto" />
							<ChatIcon name="chatbubble-outline" />
							<SendIcon name="send" />
							<BookmarkIcon name="bookmark" />
						</FooterIconContainer>

						<LikedByText>
							Like by <BoldText>moeabdol</BoldText> and{' '}
							<BoldText>99 others</BoldText>
						</LikedByText>

						<PostDescription>
							<UsernameText>moeabdol</UsernameText> Lorem ipsum dolor sit amet,
							consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
							Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
							dolor sit amet.
						</PostDescription>

						<ViewCommentsText>View all 16 comments</ViewCommentsText>

						<CommentsContainer>
							<Comment>
								<UsernameText>moeabdol</UsernameText> Lorem ipsum dolor sit
								amet, nonumy eirmod tempor Lorem ipsum dolor sit amet.
							</Comment>
							<CommentLikeIcon name="hearto" size={10} />
						</CommentsContainer>

						<PublishDateText>18 May, 2023</PublishDateText>
					</FooterContainer>
				</ScrollView>
			</Container>
		</SafeAreaView>
	);
}

export default App;
