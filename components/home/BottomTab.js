import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const BottomTab = () => {
    return (
        <View
            style={{
                margin: 10,
                marginHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Icon icon={"home"} title={'Grocery'} />
            <Icon icon={"search"} title={'Browse'} />
            <Icon icon={"shopping-bag"} title={'Grocery'} />
            <Icon icon={"clipboard-list"} title={'Order'} />
            <Icon icon={"user"} title={'Account'} />
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({})

const Icon = ({ icon, title }) => {
    return (
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <FontAwesome5 name={icon} size={24} color="black" />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
} 