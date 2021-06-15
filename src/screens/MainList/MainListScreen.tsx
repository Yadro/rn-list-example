import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';

import {useRootStore} from '../../modules/RootStore';
import Person from '../../modules/people/models/Person';
import Filter from './components/Filter';
import {EFilter} from '../../types/EFilter';
import PersonItem from './components/PersonItem';

interface IMainListProps {}

const MainListScreen: React.FC<IMainListProps> = observer(() => {
  const rootStore = useRootStore();
  const {personsStore} = rootStore;
  const {people} = personsStore;

  const [active, setActive] = useState<EFilter>(EFilter.name);

  const renderItem = useCallback(
    ({item}: {item: Person}) => <PersonItem person={item} />,
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
});

export default MainListScreen;
