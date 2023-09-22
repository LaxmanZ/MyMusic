import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import dummyData from '../Data.json';

const HindiSongs = () => {
  const { hindiSongs } = dummyData;

  const handleSongPress = (youtubeUrl) => {
    Linking.openURL(youtubeUrl);
  };

  return (
    <>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 10,
          marginBottom: 20,
          marginLeft: 10,
          color: 'white',
        }}
      >
        Hindi Songs
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hindiSongs.map((song) => (
          <TouchableOpacity
            key={song.id}
            style={{ marginRight: 0, marginLeft: 10 }}
            onPress={() => handleSongPress(song.youtubeUrl)}
          >
            <Image
              source={{ uri: song.imageUrl }}
              style={{ width: 130, height: 130, borderRadius: 10 }}
            />
            <Text style={{color: 'white'}}>{song.title}</Text>
            <Text style={{color: 'white'}}>{song.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default HindiSongs;
