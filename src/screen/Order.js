import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

export class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      price: 75000,
    };
  }

  handleIncrement() {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrement() {
    this.setState({
      number: this.state.number - 1,
    });
  };

  componentDidMount() {
      console.log("COMPONENT DID MOUNT CALLED")
  }



  render() {
    return (
      <View>
        <View style={styles.imageBanner}>
          <Image
            style={{flex: 1, borderRadius: 10}}
            source={{
              uri: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </View>
        <View style={styles.textPlacement}>
          <Text style={styles.title}> Order Pesanan </Text>
        </View>
        <View style={styles.textPlacement}>
          <Text style={styles.price}> Price: 75.000</Text>
        </View>
        <View style={styles.counter}>
          <Button
            title="-"
            onPress={this.handleDecrement.bind(this)}
            disabled={this.state.number === 0}
          />
          <Text style={{margin: 10}}>{this.state.number}</Text>
          <Button title="+" onPress={this.handleIncrement.bind(this)} />
        </View>

        <View style={styles.textPlacement   }>
            <Text style={styles.total}>Sub Total : {this.state.price * this.state.number }</Text>
        </View>
      </View>
    );
  }
}

export default Order;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gold',
  },
  textPlacement: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  imageBanner: {
    width: 370,
    height: 150,
    marginTop: 10,
  },
  price: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'sans-serif',
  },
  counter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  total: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'sans-serif',
  },
  button: {
    width: '50%',
  },
});
