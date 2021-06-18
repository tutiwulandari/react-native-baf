import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Ticket = (props) => {
    // console.log("DATA", props.ticket.item.event)
  return (
    <View style={styles.eventCard}>
      <View style={{justifyContent:'center', alignItems:'center',backgroundColor: 'white',height: 112,width: 112,margin: 12, }}>
        <QRCode size={100} value={"localhost:8091/" + props.ticket.id} />
      </View>
      <View style={{marginVertical:12, flexDirection:'column',flex: 3}}>
        <Text style={{fontSize:26}}>{props.ticket.event.eventName}</Text>
        <Text>Event Date</Text>
      </View>

      <View style={{ marginVertical:12, flex: 1, flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize:40}}> {props.ticket.ticketCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    marginVertical: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
    height: 132,
    backgroundColor: 'cyan',
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
});

export default Ticket;
