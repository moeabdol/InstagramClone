import React from 'react';
import { Container, Text } from './App.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

function App() {
	return (
		<Container>
			<Text>Hello, World!</Text>
			<AntDesign name="stepforward" size={15} />
		</Container>
	);
}

export default App;
