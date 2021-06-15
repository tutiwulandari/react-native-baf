import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import EventCard from '../component/EventCard';

export class Home extends Component {
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
            this.state.events.map((title, index) => {
                return (<EventCard eventName={title} key={index}/>)
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

export default Home;
