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
		if (now - lastTap < 500) onDoublePress();
		lastTap = now;
	};

	return <Pressable onPress={onPressHandler}>{children}</Pressable>;
}

export default DoublePressable;
