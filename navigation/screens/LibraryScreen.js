import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LibraryScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 25, textAlign: 'center',marginBottom: 5 }}>
          Add Music and Podcasts
        </Text>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Collect Your Favorites so that you can Listen
          <Text> whenever You want</Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
        >
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 15 }}>
            Add Playlist
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
