import styled from 'styled-components/native';
import { Sizes, Weights } from '../../theme/FontSizes';
import Colors from '../../theme/Colors';

export const ContainerView = styled.View`
	padding: 10px;
`;

export const ProfileHeaderView = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;

export const ProfileImage = styled.Image`
	width: 100px;
	aspect-ratio: 1;
	border-radius: 50px;
`;

export const StatView = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const StatNumberText = styled.Text`
	font-size: ${Sizes.medium};
	font-weight: ${Weights.full};
	color: ${Colors.black};
`;

export const StatLabelText = styled.Text``;

export const NameText = styled.Text`
	color: ${Colors.black};
	font-weight: ${Weights.semiBold};
`;

export const BioText = styled.Text``;

export const ActionsContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin: 5px 0;
`;

export const ButtonSeparator = styled.View`
	margin: 0 3px;
`;
