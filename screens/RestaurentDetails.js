import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurentDetail/About'
import MenuItem from '../components/restaurentDetail/MenuItem'
import ViewCart from '../components/restaurentDetail/ViewCart'


const foods = [{
    id: 1,
    title: 'Chicken Tandoori',
    desc: 'Amazind indian dish with tenderloin chicken  off the sizzles 🔥.',
    price: '$19.20',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
    id: 2,
    title: 'Fish',
    desc: 'Amazind indian dish with tenderloin chicken  off the sizzles 🔥.',
    price: '$23.20',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
    id: 3,
    title: 'Pasta',
    desc: 'Amazind indian dish with tenderloin chicken  off the sizzles 🔥.',
    price: '$56.20',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
    id: 4,
    title: 'Momo',
    desc: 'Amazind indian dish with tenderloin chicken  off the sizzles 🔥.',
    price: '$10.20',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
},
{
    id: 5,
    title: 'Noodles',
    desc: 'Amazind indian dish with tenderloin chicken  off the sizzles 🔥.',
    price: '$33.20',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
}]




const RestaurentDetails = ({ route, navigation }) => {
    return (
        <>
            <About route={route} />
            <Divider width={1.5} style={{ marginVertical: 20 }} />
            <MenuItem restaurentName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} restaurentName={route.params.name} />
        </>
    )
}

export default RestaurentDetails

const styles = StyleSheet.create({})