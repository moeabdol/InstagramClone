import * as React from 'react';
import { PressableContainer, ButtonText } from './styles';

type ButtonProps = {
	text: string;
	onPress: () => void;
};

function Button({ text, onPress }: ButtonProps) {
	return (
		<PressableContainer onPress={onPress}>
			<ButtonText>{text}</ButtonText>
		</PressableContainer>
	);
}

export default Button;
