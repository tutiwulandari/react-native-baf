import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

class MainComponent extends Component {
  render() {
    var name = 'Wulan';
    return (
      <ScrollView>
        <View style={{width: 120, height: 100, backgroundColor: 'green'}}>
          <Text>Hello, 1</Text>
        </View>

        <View style={{width: 120, height: 100, backgroundColor: 'red'}}>
          <Text>Hello, 2</Text>
        </View>

        <View style={{width: 120, height: 100, backgroundColor: 'orange'}}>
          <Text>Hello, 3 </Text>
        </View>

        <View style={{width: 120, height: 100, backgroundColor: 'blue'}}>
          <Text>Hello, 4</Text>
        </View>
        <View style={{width: 120, height: 100, backgroundColor: 'violet'}}>
          <Text>Hello, 5</Text>
        </View>
        <View style={{width: 120, height: 100, backgroundColor: 'black'}}>
          <Text>Hello, 6</Text>
        </View>
        <View style={{width: 120, height: 100, backgroundColor: 'red'}}>
          <Text>Hello, 7</Text>
        </View>
        <View style={{width: 120, height: 100, backgroundColor: 'green'}}>
          <Text>Hello, 8</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'crimson',
  },
});

export default MainComponent;
