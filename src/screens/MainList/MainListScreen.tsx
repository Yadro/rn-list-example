import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';

import {useRootStore} from '../../modules/RootStore';
import Person from '../../modules/people/models/Person';
import Filter from './components/Filter';
import {EFilter} from '../../types/EFilter';
import PersonItem from './components/PersonItem';
import {computed} from 'mobx';

interface IMainListProps {}

const MainListScreen: React.FC<IMainListProps> = observer(() => {
  const rootStore = useRootStore();
  const {personsStore} = rootStore;

  const [activeFilter, setActiveFilter] = useState<EFilter>(EFilter.name);

  const renderItem = useCallback(
    ({item}: {item: Person}) => <PersonItem person={item} />,
    [],
  );

  const keyExtractor = useCallback(item => item.id?.toString() || '', []);

  const persons = computed(() =>
    personsStore.getCharacters(activeFilter),
  ).get();

  useEffect(() => {
    personsStore.fetchCharacters();
  }, [personsStore]);

  return (
    <View style={styles.root}>
      <Filter active={activeFilter} onChange={setActiveFilter} />
      <FlatList
        data={persons}
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
});

export default MainListScreen;
