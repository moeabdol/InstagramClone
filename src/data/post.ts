import type Post from '../models/Post.d';

const post: Post = {
	id: 1,
	createdAt: '19 December 2021',
	image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
	description:
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	user: {
		image:
			'https://i.pinimg.com/originals/9c/e2/03/9ce2033132083598eee5c59e58571f82.jpg',
		username: 'vadimnotjustdev',
	},
	nofComments: 11,
	nofLikes: 33,
	comments: [
		{
			id: 1,
			comment: 'Hello, there.',
			user: {
				username: 'vadimnotjustdev',
			},
		},
		{
			id: 2,
			comment: 'lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
			user: {
				username: 'anotheruser',
			},
		},
	],
};

export default post;
