import axios from 'axios';

const KEY = 'AIzaSyB9Bl_WA8gs15IAhqGPA3iZhgn206U0HR0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
