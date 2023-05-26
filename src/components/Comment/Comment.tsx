import * as React from 'react';
import {
	Container,
	CommentBody,
	UsernameText,
	CommentLikeIcon,
} from './styles';
import type IComment from '../../models/Comment.d';

type CommentProps = {
	comment: IComment;
};

function Comment({ comment }: CommentProps) {
	return (
		<Container>
			<CommentBody>
				<UsernameText>{comment.user.username}</UsernameText> {comment.comment}
			</CommentBody>
			<CommentLikeIcon name="hearto" size={10} />
		</Container>
	);
}

export default Comment;
