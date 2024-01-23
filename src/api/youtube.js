
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: apiKey,
    // Add any other required parameters here
  },
});

export default youtubeAPI;
