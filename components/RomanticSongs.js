import React from 'react';
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import dummyData from '../Data.json';

const RomanticSongs = () => {
  const { romanticSongs } = dummyData;

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
          marginLeft: 10,
          marginBottom: 20,
          color: 'white',
        }}
      >
        Romantic Songs
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {romanticSongs.map((song) => (
          <TouchableOpacity
            key={song.id}
            style={{ marginRight: 0, marginLeft: 10, marginBottom: 30 }}
            onPress={() => handleSongPress(song.youtubeUrl)}
          >
            <Image
              source={{ uri: song.imageUrl }}
              style={{
                width: 130,
                height: 130,
                borderRadius: 10,
                objectFit: 'cover',
                marginBottom: 2,
              }}
            />
            <Text style={{ color: 'white', marginBottom: 2 }}>
              {song.title}
            </Text>
            <Text style={{ color: 'white' }}>{song.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default RomanticSongs;
