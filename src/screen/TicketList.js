import React from 'react'
import { View, Text} from 'react-native'
import QRCode from 'react-native-qrcode-svg'

const TicketList = (props) => {
    return (
        <View style={{backgroundColor:"powderblue", padding:70, margin:20}}>
            <View style={{alignItems:'flex-end'}}>
                <QRCode value="https://timeline.coldplay.com/livetransmissions/262_med_20120602114957.jpg"/>
                <Text >INI TIKET </Text>
                <Text>INI JUMLAH TIKET </Text>
                <Text>INI TOTAL HARGA </Text>

            </View>
            
        </View>
    )
}

export default TicketList
