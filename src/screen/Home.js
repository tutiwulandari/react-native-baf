import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';

const Home = () => {
  const [events, setEvents] = useState([
    {id: 1, title: 'Coldplay Concert'},
    {id: 2, title: 'Pidato Wak Brontok'},
    {id: 3, title: 'We The Fest'},
    {id: 4, title: 'Blazture'},
    {id: 5, title: 'Smile Motion'},
    {id: 6, title: 'Djakarta Warehouse Project'},
    {id: 7, title: 'Japan Matsuri'},
  ]);

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
  });

  return (
    <ScrollView style={styles.mainContainer}>
      {events.map(event => {
        return (
          <EventCard
            id={event.id}
            eventName={event.title}
            key={event.id}
            counter={event.counter}
            handleIncrement={handleIncrementById}
            handleDecrement={handleDecrementById}
          />
        );
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
