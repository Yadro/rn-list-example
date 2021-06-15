import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';

import {EFilter, FilterStr} from '../../../types/EFilter';

interface IFilterProps {
  active: EFilter;
  onChange: (filter: EFilter) => void;
}

const Filter: React.FC<IFilterProps> = observer(props => {
  const {active, onChange} = props;

  return (
    <View style={styles.root}>
      {Object.keys(EFilter).map(filter => (
        <TouchableOpacity
          key={filter}
          onPress={() => onChange(filter as EFilter)}>
          <Text style={filter === active && styles.active}>
            {FilterStr[filter as EFilter]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  active: {
    fontWeight: 'bold',
  },
});

export default Filter;
