import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurentDetail/About'
import MenuItem from '../components/restaurentDetail/MenuItem'
import ViewCart from '../components/restaurentDetail/ViewCart'



const RestaurentDetails = ({ route, navigation }) => {
    return (
        <>
            <About route={route} />
            <Divider width={1.5} style={{ marginVertical: 20 }} />
            <MenuItem restaurentName={route.params.name} />
            <ViewCart navigation={navigation} restaurentName={route.params.name} />
        </>
    )
}

export default RestaurentDetails

const styles = StyleSheet.create({})