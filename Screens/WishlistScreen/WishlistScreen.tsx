import { Text, View } from "react-native";
import React from 'react';
const Wishlist = (props)=>{
    const {navigation} = props;
    React.useLayoutEffect(()=>{
        navigation.setOptions({
        })
    }, [])
    return (

    <View>
        <Text>Wishlist</Text>
    </View>
    )
}

export default Wishlist