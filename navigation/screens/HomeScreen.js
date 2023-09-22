import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Top10SongsList from '../../components/Top10SongsList';
import dummyData from '../../Data.json';
import KannadaSongs from '../../components/KannadaSongs';
import MostPlayedSongs from '../../components/MostPlayedSongs';
import RomanticSongs from '../../components/RomanticSongs';
import HindiSongs from '../../components/HindiSongs';

const HomeScreen = () => {
  const {
    top10Songs,
    mostPlayedSongs,
    romanticSongs,
    kannadaSongs,
    hindiSongs,
  } = dummyData;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome To Music App</Text>
      <Top10SongsList songs={top10Songs} />
      <MostPlayedSongs songs={mostPlayedSongs} />
      <HindiSongs songs={hindiSongs} />
      <KannadaSongs songs={kannadaSongs} />
      <RomanticSongs songs={romanticSongs} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'white',
  },
});

export default HomeScreen;
