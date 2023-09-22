import * as React from 'react';
import { View, Text } from 'react-native';

export default function SearchScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>
        Search Screen
      </Text>
    </View>
  );
}
