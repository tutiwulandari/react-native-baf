import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Ticket from '../component/Ticket';
import {getAllTicket} from '../rest-api/TicketApi';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(async () => {
    const data = await getAllTicket();
    setTickets(data);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={tickets}
        renderItem={x => {
          return <Ticket key={x.key} ticket={x.item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gold',
    flex: 1,
  },
});

export default TicketList;
