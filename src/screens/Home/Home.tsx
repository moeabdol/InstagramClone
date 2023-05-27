import * as React from 'react';
import { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts';

function Home() {
	const [activePostId, setActivePostId] = useState<string | null>(null);

	const viewabilityConfig = {
		itemVisiblePercentThreshold: 51,
	};

	const onViewableItemsChanged = useRef(({ viewableItems }) => {
		if (viewableItems.length > 0) setActivePostId(viewableItems[0].item.id);
	});

	return (
		<FlatList
			data={posts}
			showsVerticalScrollIndicator={false}
			renderItem={({ item }) => (
				<FeedPost post={item} isVisible={activePostId === item.id} />
			)}
			viewabilityConfig={viewabilityConfig}
			onViewableItemsChanged={onViewableItemsChanged.current}
		/>
	);
}

export default Home;
