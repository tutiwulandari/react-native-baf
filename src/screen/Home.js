import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';

const Home = () => {
  const [events, setEvents] = useState([]);

  // const handleIncrementById = id => {
  //   setEvents(
  //     events.map((event) => {
  //       if(event.id === id) return {
  //         ...event, counter: event.counter+1
  //       }
  //       return event;
  //     })
  //   )
  // };

  // const handleDecrementById = id => {
  //   setEvents(
  //     events.map((event) => {
  //       if(event.id === id) return {
  //         ...event, counter: event.counter-1
  //       }
  //       return event;
  //     })
  //   )
  // };

  useEffect(() => {
    axios.get('http://10.0.2.2:8091/events').then(res => {
      setEvents(res.data);
    });
  },[]);

  return (
    <ScrollView style={styles.mainContainer}>
      {events.map(event => {
        return <EventCard id={event.id} key={event.id} event={event} />;
      })}
    </ScrollView>
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
