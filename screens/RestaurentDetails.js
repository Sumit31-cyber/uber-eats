import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurentDetail/About'
import MenuItem from '../components/restaurentDetail/MenuItem'
import ViewCart from '../components/restaurentDetail/ViewCart'
import FocusedStatusBar from '../components/restaurentDetail/FocusedStatusBar'


const foods = [{
    id: 1,
    title: ' Seafood paella',
    desc: 'Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish.',
    price: '$19.20',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170206165040-dubai-michelin-dining-boca.jpg'
},
{
    id: 2,
    title: 'Stinky tofu',
    desc: 'The odor of fermenting tofu is so overpowering many aren\'t able to shake off the memory for months..',
    price: '$23.20',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302143134-tofu.jpg'
},
{
    id: 3,
    title: 'Chicken parm',
    desc: 'Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato sauce drizzled over the top of a chicken.',
    price: '$56.20',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170920150817-chicken-parm.jpg'
},
{
    id: 4,
    title: ' Chili crab',
    desc: 'Spicy chili-tomato gravy tends to splatter, which is why you need to mop everything up with mini mantou buns.',
    price: '$10.20',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306145913-singapore-chili-crab.jpg'
},
{
    id: 5,
    title: 'Goi cuon',
    desc: 'This snack made from pork, shrimp, herbs, rice vermicelli and other ingredients wrapped in rice paper is served at room temperature..',
    price: '$33.20',
    image: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170306134418-goi-cuon.jpg'
}]




const RestaurentDetails = ({ route, navigation }) => {
    return (
        <>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor='transparent'
                translucent={true}
            />
            <About route={route} />
            <Divider width={1.5} style={{ marginVertical: 20 }} />
            <MenuItem restaurentName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} restaurentName={route.params.name} />
        </>
    )
}

export default RestaurentDetails

const styles = StyleSheet.create({})