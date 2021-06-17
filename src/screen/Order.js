import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Counter from '../component/Counter';
import {getEventById} from '../rest-api/EventApi';

const Order = ({route, navigation}) => {
  const {id} = route.params;
  const price = 75000;
  const [subTotal, setSubTotal] = useState(0);
  const [counter, setCounter] = useState(0);

  const [event, setEvent] = useState({
    id: '',
    eventName: '',
    ticketPrice: 0,
    imageUrl: '',
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setSubTotal(counter * price);
  });

  useEffect(async () => {
    const event = await getEventById(id);
    setEvent(event);
  }, [id]);


  return (
    <ScrollView>
      <View style={styles.imageBanner}>
        <Image
          style={{flex: 1, borderRadius: 10}}
          source={{uri:event.imageUrl}}
        />
      </View>
      <View style={styles.textPlacement}>
        <Text style={styles.title}> {event.eventName}</Text>
      </View>
      <View style={styles.textPlacement}>
        <Text style={styles.price}> Price: Rp. {event.ticketPrice}</Text>
      </View>
      <Counter
        counter={counter}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />

      <View style={{alignItems:'center', marginTop:30, marginBottom:40}}>
      <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('TicketList', {event:event, counter:counter})}>
        <Text style={styles.textTombol}> Checkout</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textPlacement: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#292961',
    elevation: 20,
  },
  imageBanner: {
    width: 400,
    height: 300,
    marginTop: 20,
  },
  price: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'sans-serif',
  },
  total: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'sans-serif',
  },
  tombol: {
    backgroundColor: '#292961',
    padding: 10,
    borderRadius: 20,
    elevation:20,
    marginTop: 10,
    width:300,
    alignContent:'space-around'
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Order;
