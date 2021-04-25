import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit('youtube api');
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  if (!selectedVideo) {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={onSearchSubmit} />
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
      </div>
    );
  } else {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   }

//   componentDidMount() {
//     this.onSearchSubmit('youtube api');
//   }

//   onSearchSubmit = async (term) => {
//     const response = await youtube.get('/search', {
//       params: { q: term }
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });
//   }

//   render() {
//     if (!this.state.selectedVideo) {
//       return (
//         <div className='ui container' style={{marginTop: '10px'}}>
//           <SearchBar onSubmit={this.onSearchSubmit} />
//             <div className="ui active inverted dimmer">
//               <div className="ui text loader">Loading</div>
//             </div>
//         </div>
//       );
//     }
//     return (
//       <div className='ui container' style={{marginTop: '10px'}}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <div className='ui grid'>
//           <div className='ui row'>
//             <div className='eleven wide column'>
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className='five wide column'>
//             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }

export default App;
