import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';

import {useRootStore} from '../../modules/RootStore';
import Person from '../../modules/people/models/Person';
import Routes from '../../types/Routes';
import Filter from './Filter';
import {EFilter} from '../../types/EFilter';

interface IItem {
  person: Person;
}

const Item: React.FC<IItem> = props => {
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

interface IMainListProps {}

const MainList: React.FC<IMainListProps> = observer(() => {
  const rootStore = useRootStore();
  const {personsStore} = rootStore;
  const {people} = personsStore;

  const [active, setActive] = useState<EFilter>(EFilter.name);

  const renderItem = useCallback(
    ({item}: {item: Person}) => <Item person={item} />,
    [],
  );

  const keyExtractor = useCallback(item => item.id?.toString() || '', []);

  useEffect(() => {
    personsStore.getCharacters();
  }, [personsStore]);

  return (
    <View style={styles.root}>
      <Filter active={active} onChange={setActive} />
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
