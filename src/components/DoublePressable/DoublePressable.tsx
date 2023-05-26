import * as React from 'react';
import { ReactNode } from 'react';
import { Pressable } from 'react-native';

type DoublePressableProps = {
	children: ReactNode;
	onDoublePress?: () => void;
};

function DoublePressable({ children, onDoublePress }: DoublePressableProps) {
	let lastTap = 0;

	const onPressHandler = () => {
		const now = Date.now();
		if (onDoublePress && now - lastTap < 300) onDoublePress();
		lastTap = now;
		return;
	};

	return <Pressable onPress={onPressHandler}>{children}</Pressable>;
}

export default DoublePressable;
