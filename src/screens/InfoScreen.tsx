import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import Person from '../modules/people/models/Person';

interface IInfoPairProps {
  label: string;
  info: string | number | null;
}

const InfoPair: React.FC<IInfoPairProps> = props => {
  const {label, info} = props;

  return (
    <View style={styles.infoPairContainer}>
      <Text style={styles.label}>{`${label}:`}</Text>
      <Text>{info}</Text>
    </View>
  );
};

type InfoScreenProps = StackScreenProps<
  {
    InfoScreen: {
      person: Person;
    };
  },
  'InfoScreen'
>;

const InfoScreen: React.FC<InfoScreenProps> = props => {
  const {route} = props;
  const {person} = route.params;

  const info = [
    {label: 'Name', info: person.fullName},
    {label: 'Gender', info: person.gender},
    {label: 'Age', info: person.age},
    {label: 'Email', info: person.email},
    {label: 'Catch phrase', info: person.catch_phrase},
  ];

  return (
    <View style={styles.root}>
      {info.map((item, index) => (
        <InfoPair key={index} label={item.label} info={item.info} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  infoPairContainer: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  label: {
    marginRight: 4,
  },
});

export default InfoScreen;
