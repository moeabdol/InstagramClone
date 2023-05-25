import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FeedPost from './src/components/FeedPost';
import post from './src/data/post';

function App() {
	return (
		<SafeAreaView>
			<ScrollView>
				<FeedPost post={post} />
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
