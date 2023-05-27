import * as React from 'react';
import { ContainerView } from './styles';
import { FlatList } from 'react-native';
import comments from '../../assets/data/comments';
import Comment from '../../components/Comment';

function Comments() {
	return (
		<ContainerView>
			<FlatList
				data={comments}
				renderItem={({ item }) => <Comment comment={item} showDetails={true} />}
			/>
		</ContainerView>
	);
}

export default Comments;
