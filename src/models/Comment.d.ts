import type IUser from './User.d';

interface IComment {
	id: number;
	comment: string;
	user: IUser;
}

export default IComment;
