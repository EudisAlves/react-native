import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

class HomeScreen extends Component {
  async componentDidMount() {
    await TrackPlayer.setupPlayer({});
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
    });

    const track = {
      id: '1',
      url: 'https://www.youtube.com/watch?v=2cZ_EFAmj08&list=RDMM2cZ_EFAmj08&start_radio=1YOUR_AUDIO_URL_HERE',
      title: 'Song Title',
      artist: 'Artist Name',
      artwork: 'ALBUM_ART_URL',
    };

    await TrackPlayer.add([track]);
  }

  playTrack = async () => {
    await TrackPlayer.play();
  };

  pauseTrack = async () => {
    await TrackPlayer.pause();
  };

  render() {
    return (
      <View>
        <Text>Music Player</Text>
        <Button title="Play" onPress={this.playTrack} />
        <Button title="Pause" onPress={this.pauseTrack} />
      </View>
    );
  }
}

export default HomeScreen;
