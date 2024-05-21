import React, { useState } from 'react';
import Video from './components/video';
import Playlist from './components/playlist';


function App() {
	const [videos] = useState([
		{ id: 1, title: 'Big Buck Bunny', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
		{ id: 2, title: 'Elephant Dream', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
		{ id: 3, title: 'For Bigger Blazes', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
		
	]);

	const [currentVideoUrl, setCurrentVideoUrl] = useState(videos[0].url);

	const handleSelectVideo = (url) => {
		setCurrentVideoUrl(url);
	};



	return (
		<div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
  <div class="relative w-full">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
		<div className="h-screen overflow-hidden flex items-center">
			<div className="inline-flex flex-row bg-white">
				<main className="p-4 m-2 bg-white w-full">
					
					<Video src={currentVideoUrl} />
				</main>
				<Playlist className=" bg-white" videos={videos}
					onSelectVideo={handleSelectVideo} />
			</div>
		</div>
		</div>
		</div>
	)
}


export default App
