import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screen/Home';
import Order from './screen/Order';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.appBar}></View>
        <View style={styles.mainContainer}>
          <Order />
          {/* <Home /> */}
        </View>
        <View style={styles.bottomNavigation}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  appBar: {
    flex: 1,
    backgroundColor: 'orchid',
  },
  bottomNavigation: {
    flex: 1, //full screen
    backgroundColor: 'darkviolet',
  },
  wrapContainer: {
    margin: 5,
    backgroundColor: 'powderblue',
    flexWrap: 'wrap',
  },

  card: {
    width: 100,
    height: 50,
    marginTop: 10,
  },
  eventCard: {
    backgroundColor: 'crimson',
  },
});

export default App;
