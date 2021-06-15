import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventCard = props => {
  return (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}> {props.eventName}</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  eventCard: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 160,
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 10,
  },
  eventTitle: {
    fontSize: 32,
    fontFamily: 'Conchin',
    color: 'white',
  },
});
