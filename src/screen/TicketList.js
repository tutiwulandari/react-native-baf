import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const TicketList = ({route}) => {
  const {event} = route.params;

  console.log('INI DATA', event);
  return (
    <View style={{backgroundColor: 'powderblue', padding: 50, margin: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight:20}}>
          <QRCode value={event.imageUrl} style={{alignItems: 'flex-start'}} />
        </View>
        <View>
          <Text style={styles.textTitle}>Tiket: {event.eventName}</Text>
          <Text style={styles.textTitle}>Jumlah Tiket: {route.params.counter} </Text>
          <Text style={styles.textTitle}>Total Harga: {route.params.counter * event.ticketPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:15
  },
});

export default TicketList;
