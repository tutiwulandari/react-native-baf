import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Counter from './Counter';


const EventCard = props => {
  return (
    <View style={styles.eventCard}>

     <View style={{flex:1, backgroundColor:'black', height:10}}>
     <Text style={styles.eventTitle}> {props.eventName}</Text>
     </View>
     <View style={{textAlign:'right'}}>
       <Counter counter={props.counter} />
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
