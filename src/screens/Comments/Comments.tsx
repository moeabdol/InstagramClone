import * as React from 'react';
import { useState } from 'react';
import {
	ContainerView,
	CommentsFlatList,
	InputContainerView,
	AvatarImage,
	CommentTextInput,
	PostText,
} from './styles';
import comments from '../../assets/data/comments';
import Comment from '../../components/Comment';

function Comments() {
	const [commentText, setCommentText] = useState('');

	const onPost = () => {
		// TODO: Simulate sending data <28-05-23, Mohammed> //
	};

	return (
		<ContainerView>
			<CommentsFlatList
				showsVerticalScrollIndicator={false}
				data={comments}
				renderItem={({ item }) => <Comment comment={item} showDetails={true} />}
			/>

			<InputContainerView>
				<AvatarImage
					source={{
						uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
					}}
				/>
				<CommentTextInput
					multiline
					placeholder="Write your comment..."
					value={commentText}
					onChangeText={setCommentText}
				/>
				<PostText onPress={onPost}>POST</PostText>
			</InputContainerView>
		</ContainerView>
	);
}

export default Comments;
