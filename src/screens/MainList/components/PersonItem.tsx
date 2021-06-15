import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Person from '../../../modules/people/models/Person';
import Routes from '../../../types/Routes';

interface IPersonItem {
  person: Person;
}

const PersonItem: React.FC<IPersonItem> = props => {
  const {person} = props;
  const navigation = useNavigation();

  const handlePress = useCallback(
    () => navigation.navigate(Routes.InfoScreen, {person}),
    [navigation, person],
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Text style={styles.text}>{person.fullName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default PersonItem;
