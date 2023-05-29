import * as React from 'react';
import {
	ProfileHeaderView,
	ProfileImage,
	StatView,
	StatNumberText,
	StatLabelText,
	NameText,
	BioText,
	ActionsContainer,
	ButtonSeparator,
} from './styles';
import user from '../../../assets/data/user';
import Button from '../../../components/Button';

function ProfileHeader() {
	return (
		<>
			<ProfileHeaderView>
				<ProfileImage source={{ uri: user.image }} />
				<StatView>
					<StatNumberText>99</StatNumberText>
					<StatLabelText>Posts</StatLabelText>
				</StatView>
				<StatView>
					<StatNumberText>99</StatNumberText>
					<StatLabelText>Followers</StatLabelText>
				</StatView>
				<StatView>
					<StatNumberText>99</StatNumberText>
					<StatLabelText>Following</StatLabelText>
				</StatView>
			</ProfileHeaderView>

			<NameText>{user.name}</NameText>
			<BioText>{user.bio}</BioText>

			<ActionsContainer>
				<Button
					text="Edit Profile"
					onPress={() => console.log('on edit profile')}
				/>
				<ButtonSeparator />
				<Button
					text="Another Action"
					onPress={() => console.log('on another action')}
				/>
			</ActionsContainer>
		</>
	);
}

export default ProfileHeader;
