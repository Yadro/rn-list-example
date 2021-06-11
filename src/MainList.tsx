import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

interface IMainListProps {}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}: {title: string}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MainList: React.FC<IMainListProps> = observer(() => {
  const renderItem = useCallback(({item}) => <Item title={item.title} />, []);

  useEffect(() => {}, []);

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
});

const styles = StyleSheet.create({
  root: {},
});

export default MainList;
