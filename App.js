import React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Teste</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
