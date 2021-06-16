import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Counter = props => {
  return (
    <View style={styles.counter}>
      <View style={styles.button}>
        <Button
          title="-"
          onPress={props.handleDecrement}
          // disabled={counter === 0}
          color="#292961"
          style={{borderRadius: 10}}
        />
      </View>
      <View style={styles.textNumber}>
        <Text style={{margin: 10, fontSize: 18}}>{props.counter}</Text>
      </View>
      <View style={styles.button}>
        <Button title="+" onPress={props.handleIncrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
  },
  textNumber: {
    fontSize: 26,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  counter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Counter;
