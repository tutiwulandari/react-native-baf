import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';

export class FlexExercise2 extends Component {
  state = {
    events: [
      'Coldplay Concert',
      'Pidato Wak Brontok',
      'We The Fest',
      'Blazture',
      'Smile Motion',
      'Djakarta Warehouse Project',
      'Japan Matsuri',
    ],
  };

  render() {
    return (
        <ScrollView style={styles.mainContainer}>
        {
            this.state.events.map((title) => {
                return (<EventCard eventName={title} key={title}/>)
            })
        }
     </ScrollView>
    );
  }
}


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

export default FlexExercise2;
