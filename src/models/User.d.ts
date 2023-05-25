import type IPost from './Post.d';

interface IUser {
	id: string;
	name: string;
	username: string;
	image?: string;
	bio?: string;
	posts?: IPost[];
	website?: string;
}

export default IUser;
