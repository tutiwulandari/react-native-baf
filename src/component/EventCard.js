import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventCard = props => {
  return (
    <View style={styles.eventCard}>
      <View style={{flex: 2, backgroundColor: 'black'}}>
        <Text style={styles.eventTitle}> {props.event.eventName}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={styles.eventTitle}>{props.event.ticketPrice}</Text>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  eventCard: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 160,
    backgroundColor: 'cyan',
    borderRadius: 10,
    elevation: 10,
  },
  eventTitle: {
    fontSize: 32,
    fontFamily: 'Conchin',
    color: 'white',
  },
});
