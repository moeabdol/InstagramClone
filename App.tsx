import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';

function App() {
	return (
		<SafeAreaView>
			<ScrollView>
				<FeedPost />
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
