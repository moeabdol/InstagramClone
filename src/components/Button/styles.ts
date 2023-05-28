import styled from 'styled-components/native';
import Colors from '../../theme/Colors';
import { Weights } from '../../theme/FontSizes';

export const PressableContainer = styled.Pressable`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border: 1px solid ${Colors.borderGrey};
	border-radius: 5px;
	padding: 5px;
	flex: 1;
`;

export const ButtonText = styled.Text`
	color: ${Colors.black};
	font-weight: ${Weights.semiBold};
`;
