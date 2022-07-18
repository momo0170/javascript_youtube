import React from 'react';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDuHpbqM5TukVX_46jz6_ii0gus5XQxmqY',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
