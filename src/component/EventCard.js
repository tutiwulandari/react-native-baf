import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const EventCard = props => {
  return (
   <TouchableOpacity onPress={props.onPressHandler}>
      <View style={styles.eventCard}>
      <View style={{flex: 2, backgroundColor: 'pink', birderRadius:10}}>
        <Image source={{uri:props.event.imageUrl}} />
        <Text style={styles.eventTitle}> {props.event.eventName}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text style={styles.eventTitle}>Rp. {props.event.ticketPrice}</Text>
      </View>
    </View>
   </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  eventCard: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 120,
    backgroundColor: 'cyan',
    borderRadius: 15,
    elevation: 10,
  },
  eventTitle: {
    fontSize: 26,
    fontFamily: 'Conchin',
    color: 'black',
    textAlign:'center',
    elevation:10
  },
});
