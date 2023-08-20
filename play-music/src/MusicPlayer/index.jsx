import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Video from 'react-native-video';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'url_da_sua_musica.mp3' }} // Substitua pela URL da sua música
        paused={false} // Iniciar a reprodução automaticamente
        repeat={true} // Repetir a música
        style={styles.audioPlayer}
      />
    </View>
  );
};



export default MusicPlayer;
