import styled from 'styled-components/native';
import Colors from '../../theme/Colors';
import { Sizes, Weights } from '../../theme/FontSizes';

export const Container = styled.View``;

export const ImageContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-contnet: flex-start;
	align-items: center;
	padding: 10px;
`;

export const Image = styled.Image`
	width: 30%;
	aspect-ratio: 1;
	border-radius: 100px;
`;

export const ImageText = styled.Text`
	color: ${Colors.primary};
	font-size: ${Sizes.medium};
	font-weight: ${Weights.semiBold};
	margin: 10px;
`;

export const FormContainer = styled.View``;

export const InputContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-self: stretch;
	margin: 5px 10px;
`;

export const InputLabel = styled.Text`
	width: 75px;
`;

export const InputBox = styled.TextInput`
	flex: 1;
	border-bottom-color: ${Colors.borderGrey};
	border-bottom-width: 1px;
	padding: 0;
`;

export const Submit = styled.Text`
	align-self: center;
	color: ${Colors.primary};
	font-size: ${Sizes.medium};
	font-weight: ${Weights.semiBold};
	margin-top: 10px;
`;
