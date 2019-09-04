import React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';

import './config/ReactotronConfig';

console.tron.log(`Init at ${new Date()}`);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {__DEV__ ? <Text>Dev</Text> : <Text>Prod</Text>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
