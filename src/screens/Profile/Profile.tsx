import * as React from 'react';
import {
	PostsFlatList,
	ImageContainer,
	PostImage,
	CollectionIcon,
} from './styles';
import user from '../../assets/data/user';
import ProfileHeader from './ProfileHeader';

function Profile() {
	return (
		<PostsFlatList
			showsVerticalScrollIndicator={false}
			numColumns={3}
			data={user.posts}
			renderItem={({ item }: any) => (
				<ImageContainer>
					<PostImage source={{ uri: item.image ?? item.images[0] }} />
					{item.images && <CollectionIcon name="collections" />}
				</ImageContainer>
			)}
			ListHeaderComponent={ProfileHeader}
		/>
	);
}

export default Profile;
