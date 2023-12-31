import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { SafeAreaView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 5 }}>
      <MainContainer />
    </SafeAreaView>
  );
}

export default App;
