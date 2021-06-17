import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';
import getAllEvent from '../rest-api/EventApi';
import {createStackNavigator} from '@react-navigation/stack';
import Order from './Order';

const EventListScreen = ({navigation}) => {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const data = await getAllEvent();
    setEvents(data);
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      {events.map(event => {
        return (
          <EventCard
            id={event.id}
            key={event.id}
            event={event}
            navigation={navigation}
            onPressHandler={() => navigation.navigate('Order')}
          />
        );
      })}
    </ScrollView>
  );
};

const Home = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="EventListScreen"
      screenOptions={{headerShown: 'false'}}>
      <Stack.Screen name="EventListScreen" component={EventListScreen} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gold',
  },
  wrapContainer: {
    margin: 5,
    backgroundColor: 'powderblue',
    flexWrap: 'wrap',
  },
  card: {
    width: 80,
    height: 50,
  },
});

export default Home;
