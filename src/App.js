import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './screen/Home';
import Order from './screen/Order';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TicketList from './screen/TicketList';


const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = 'home';
            } else if ((route.name == 'TicketList')) {
              iconName = 'ticket-alt';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TicketList" component={TicketList} />
      </Tab.Navigator>
    </NavigationContainer>
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
    textAlign: 'right',
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
