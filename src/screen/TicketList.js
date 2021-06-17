import React from 'react'
import { View, Text} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { event } from 'react-native-reanimated'

const TicketList = ({route}) => {

    const {event} = route.params;
    
    console.log("INI DATA", event)
    return (
        <View style={{backgroundColor:"powderblue", padding:70, margin:20}}>
            <View style={{alignItems:'flex-end'}}>
                <QRCode value="https://timeline.coldplay.com/livetransmissions/262_med_20120602114957.jpg"/>
                <Text >{event.eventName}</Text>
                <Text>{route.params.counter} </Text>
                <Text>{route.params.counter * event.ticketPrice} </Text>

            </View>
            
        </View>
    )
}

export default TicketList
