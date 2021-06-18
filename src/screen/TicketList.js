import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Ticket from '../component/Ticket';

const TicketList = () => {

  const [tickets, setTickets] = useState([
    {
      "id": "8a8ae4ce7a1d1e0e017a1d2811280006",
      "event": {
          "id": "8a8ae4ce7a1d1e0e017a1d234d640000",
          "eventName": "DWP ",
          "ticketPrice": 3000000,
          "imageUrl": "https://img2.pngdownload.id/20180329/yze/kisspng-ticket-admit-one-cinema-clip-art-ticket-5abcf1eb04f483.3901693515223321390203.jpg"
      },
      "ticketCount": 3,
      "email": "Tuti Wulandari"
  },
  {
      "id": "8a8ae4ce7a1d1e0e017a1d28dca90007",
      "event": {
          "id": "8a8ae4ce7a1d1e0e017a1d23d8f20001",
          "eventName": "Cold Play ",
          "ticketPrice": 3000000,
          "imageUrl": "https://img2.pngdownload.id/20180329/yze/kisspng-ticket-admit-one-cinema-clip-art-ticket-5abcf1eb04f483.3901693515223321390203.jpg"
      },
      "ticketCount": 2,
      "email": "Ahmad Irfaan"
  },
  {
      "id": "8a8ae4ce7a1d1e0e017a1d293f290008",
      "event": {
          "id": "8a8ae4ce7a1d1e0e017a1d240f5f0002",
          "eventName": "Meet n Greet Atta ",
          "ticketPrice": 3000000,
          "imageUrl": "https://img2.pngdownload.id/20180329/yze/kisspng-ticket-admit-one-cinema-clip-art-ticket-5abcf1eb04f483.3901693515223321390203.jpg"
      },
      "ticketCount": 2,
      "email": "Arinda Kusuma"
  },
  {
      "id": "8a8ae4ce7a1d1e0e017a1d29a60b0009",
      "event": {
          "id": "8a8ae4ce7a1d1e0e017a1d234d640000",
          "eventName": "DWP ",
          "ticketPrice": 3000000,
          "imageUrl": "https://img2.pngdownload.id/20180329/yze/kisspng-ticket-admit-one-cinema-clip-art-ticket-5abcf1eb04f483.3901693515223321390203.jpg"
      },
      "ticketCount": 2,
      "email": "Eka Nur"
  }
  ])

    return (
       <View style={styles.mainContainer}>
         <FlatList data ={tickets}
                    renderItem={(x)=> {
                      return <Ticket ticket={x.item} />
                    }} />
       </View>
      );
  }
 
const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"gold",
    flex:1
  },

});

export default TicketList;
