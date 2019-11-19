import React, { Component } from 'react'
import {View, Text, Image } from "react-native";
 class ShowImage extends Component {
    render() {
        return (
            <View style={{width:"100%",overflow:"hidden", height:450, }}>
                    <Image style={{width : "100%" , height:"100%"}} 
                        source={require(this.props.image)} />
            </View>
        )
    }
}
export default ShowImage;
