import React from 'react';

const VideoDetail = ({ video }) => {

  const url = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className='video-detail'>
      <div className='ui embed'>
        <iframe
          title={video.snippet.title}
          src={url}
          allowfullscreen="0"
        />
      </div>
      <div className='ui segment' >
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
