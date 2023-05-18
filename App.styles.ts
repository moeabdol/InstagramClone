import styled from 'styled-components/native';
import Colors from './src/theme/Colors';
import { Sizes, Weights } from './src/theme/FontSizes';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Text = styled.Text`
	color: ${Colors.primary};
	font-size: ${Sizes.default};
	font-weight: ${Weights.default};
`;
