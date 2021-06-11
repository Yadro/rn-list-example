import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRootStore} from './modules/RootStore';

import {observer} from 'mobx-react';
import Person from './modules/people/models/Person';

interface IMainListProps {}

const Item = ({title}: {title: string}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{title}</Text>
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

  useEffect(() => {
    personsStore.getCharacters();
  }, [personsStore]);

  return (
    <View>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString() || ''}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {},
});

export default MainList;
