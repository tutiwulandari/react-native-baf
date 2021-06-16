import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.counter}>
      <View style={styles.button}>
        <Button
          title="-"
          onPress={() => {
            props.handleDecrement(props.id);
          }}
          // disabled={counter === 0}
          color="#292961"
          style={{borderRadius: 10}}
        />
      </View>
      <Text style={{margin: 10, fontSize: 18}}>{props.counter}</Text>
      <View style={styles.button}>
        <Button
          title="+"
          onPress={() => {
            props.handleIncrement(props.id);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    marginRight: 10,
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
