import * as React from 'react';
import {
	Container,
	ImageContainer,
	Image,
	ImageText,
	FormContainer,
	InputContainer,
	InputLabel,
	InputBox,
	Submit,
} from './styles';
import user from '../../assets/data/user';

function EditProfile() {
	const onSubmit = () => {
		// TODO: Implement submit logic <29-05-23, Mohammed> //
		console.log('on submit click');
	};

	return (
		<Container>
			<ImageContainer>
				<Image source={{ uri: user.image }} />
				<ImageText>Change profile photo</ImageText>
			</ImageContainer>

			<FormContainer>
				<InputContainer>
					<InputLabel>Name</InputLabel>
					<InputBox placeholder="Name" />
				</InputContainer>
				<InputContainer>
					<InputLabel>Username</InputLabel>
					<InputBox placeholder="Username" />
				</InputContainer>
				<InputContainer>
					<InputLabel>Website</InputLabel>
					<InputBox placeholder="Website" />
				</InputContainer>
				<InputContainer>
					<InputLabel>Bio</InputLabel>
					<InputBox placeholder="Bio" multiline />
				</InputContainer>
			</FormContainer>

			<Submit onPress={onSubmit}>Save</Submit>
		</Container>
	);
}

export default EditProfile;
