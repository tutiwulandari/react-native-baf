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
  }

  handleDecrement() {
    this.setState({
      number: this.state.number - 1,
    });
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT CALLED');
  }

  render() {
    return (
      <View>
        <View style={styles.imageBanner}>
          <Image
            style={{flex: 1, borderRadius: 10}}
            source={{
              uri: 'https://akcdn.detik.net.id/visual/2021/06/09/bts-meals-mc-donald-3_169.jpeg?w=650',
            }}
          />
        </View>
        <View style={styles.textPlacement}>
          <Text style={styles.title}> BTS MEAL </Text>
        </View>
        <View style={styles.textPlacement}>
          <Text style={styles.price}> Price: Rp. 75.000</Text>
        </View>
        <View style={styles.counter}>
         <View style={styles.button}>
         <Button
            title="-"
            onPress={this.handleDecrement.bind(this)}
            disabled={this.state.number === 0}
            color="#292961"
            style={{borderRadius:10}}
            
          />
         </View>
         <View style={styles.textNumber}>
         <Text style={{margin: 10, fontSize:18}}>{this.state.number}</Text>
         </View>
          <View style={styles.button} >
          <Button title="+" onPress={this.handleIncrement.bind(this)} />
          </View>
        </View>

        <View style={styles.textPlacement}>
          <Text style={styles.total}>
            Total Rp. {this.state.price * this.state.number}
          </Text>
        </View>
      </View>
    );
  }
}

export default Order;

const styles = StyleSheet.create({
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
    color:'#292961',
    elevation:20
  },
  imageBanner: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
  price: {
    textAlign: 'center',
    fontSize: 24,
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
    width: 50,
    
  },
  textNumber:{
      fontSize:26,
      fontFamily:'sans-serif',
      fontWeight:'bold'
  }
});
