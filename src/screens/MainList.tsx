import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRootStore} from '../modules/RootStore';

import {observer} from 'mobx-react';
import Person from '../modules/people/models/Person';

interface IMainListProps {}

const Item = ({title}: {title: string}) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MainList: React.FC<IMainListProps> = observer(() => {
  const rootStore = useRootStore();
  const {personsStore} = rootStore;
  const {people} = personsStore;

  const renderItem = useCallback(
    ({item}: {item: Person}) => <Item title={item.fullName || ''} />,
    [],
  );

  const keyExtractor = useCallback(item => item.id?.toString() || '', []);

  useEffect(() => {
    personsStore.getCharacters();
  }, [personsStore]);

  return (
    <View style={styles.root}>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default MainList;
