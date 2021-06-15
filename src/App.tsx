import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainListScreen from './screens/MainList/MainListScreen';
import InfoScreen from './screens/InfoScreen';
import Routes from './types/Routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name={Routes.Main}
              component={MainListScreen}
              options={{
                title: 'People',
                headerStyle: {
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name={Routes.InfoScreen}
              component={InfoScreen}
              options={{title: 'Info Card'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
