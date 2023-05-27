import * as React from 'react';
import { useState } from 'react';
import {
	ContainerView,
	AvatarImage,
	TextView,
	CommentText,
	UsernameText,
	CommentActionsView,
	CommentActionText,
	CommentLikePressable,
	CommentLikeIcon,
} from './styles';
import type IComment from '../../models/Comment.d';

type CommentProps = {
	comment: IComment;
	showDetails?: boolean;
};

function Comment({ comment, showDetails = false }: CommentProps) {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<ContainerView>
			{showDetails && <AvatarImage source={{ uri: comment.user.image }} />}

			<TextView>
				<CommentText>
					<UsernameText>{comment.user.username}</UsernameText> {comment.comment}
				</CommentText>

				{showDetails && (
					<CommentActionsView>
						<CommentActionText>2d</CommentActionText>
						<CommentActionText>5 Likes</CommentActionText>
						<CommentActionText>Reply</CommentActionText>
					</CommentActionsView>
				)}
			</TextView>

			<CommentLikePressable
				onPress={() => setIsLiked(prev => !prev)}
				hitSlop={5}
			>
				<CommentLikeIcon
					name={isLiked ? 'heart' : 'hearto'}
					size={10}
					isLiked={isLiked}
				/>
			</CommentLikePressable>
		</ContainerView>
	);
}

export default Comment;
