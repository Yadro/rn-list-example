import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IInfoScreenProps {}

const InfoScreen: React.FC<IInfoScreenProps> = () => {
  return (
    <View style={styles.root}>
      <Text>InfoScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default InfoScreen;
