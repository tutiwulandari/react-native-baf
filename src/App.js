import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './screen/Home';
import Order from './screen/Order';

const App = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.appBar}>
        <Text> Sub Total : </Text>
      </View>

      <View style={styles.mainContainer}>
        {/* <Order /> */}
        <Home />
      </View>
      <View style={styles.bottomNavigation}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  appBar: {
    flex: 1,
    backgroundColor: 'orchid',
    textAlign:'right'
  },
  bottomNavigation: {
    flex: 1, //full screen
    backgroundColor: 'darkviolet',
  },
  wrapContainer: {
    margin: 5,
    backgroundColor: 'white',
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
