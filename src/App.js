import React from "react";
import { Grid } from "@mui/material";
import { SearchBar, VideoDetail, VideoList } from "./components";
import './App.css'
import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.handleSubmit('pdf generation with react and node')
    
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
       <Grid justify="center" container spacing={5}>
        <Grid item xs={10}>
          <Grid container spacing={5}>
            <Grid item xs={10}>
              <h1>Welcome to Utube</h1>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={3}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
