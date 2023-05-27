import type IUser from './User.d';

interface IComment {
	id: string;
	comment: string;
	user: IUser;
}

export default IComment;
