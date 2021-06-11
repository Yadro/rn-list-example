import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import MainList from './MainList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainList />
    </SafeAreaView>
  );
};

export default App;
