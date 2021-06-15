import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventCard = props => {
  return (
    <View style={styles.eventCard}>
     <View style={{flex:1, backgroundColor:'black'}}>
     <Text style={styles.eventTitle}> {props.eventName}</Text>
     </View>
    <View style={{flex:1}}>

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
