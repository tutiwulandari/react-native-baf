import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';

const Home = () => {
  const [events, setEvent] = useState([
    {id: 1, title: 'Coldplay Concert', counter: 0},
    {id: 2, title: 'Pidato Wak Brontok', counter: 0},
    {id: 3, title: 'We The Fest', counter: 0},
    {id: 4, title: 'Blazture', counter: 0},
    {id: 5, title: 'Smile Motion', counter: 0},
    {id: 6, title: 'Djakarta Warehouse Project', counter: 0},
    {id: 7, title: 'Japan Matsuri', counter: 0},
  ]);

  const handleIncrementById = id => {
    setEvent(
      events.map((event) => {
        if(event.id === id) return {
          ...event, counter: event.counter+1
        }
        return event;
      })
    )
  };

  
  const handleDecrementById = id => {
    setEvent(
      events.map((event) => {
        if(event.id === id) return {
          ...event, counter: event.counter-1
        }
        return event;
      })
    )
  };


  return (
    <ScrollView style={styles.mainContainer}>
      {events.map(event => {
        return (
          <EventCard
            id={event.id}
            eventName={event.title}
            key={event.id}
            counter={event.counter}
            handleIncrement ={handleIncrementById}
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
