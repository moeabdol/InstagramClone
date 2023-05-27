import type IUser from './User.d';
import type IComment from './Comment.d';

interface IPost {
	id: string;
	createdAt: string;
	image?: string;
	images?: string[];
	video?: string;
	description: string;
	user: IUser;
	nofComments: number;
	nofLikes: number;
	comments: IComment[];
}

export default IPost;
