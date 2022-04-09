import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const items = [
    {
        id: 1,
        image: require("../../assets/images/shopping-bag.png"),
        text: 'Pick-up'
    },
    {
        id: 2,
        image: require("../../assets/images/soft-drink.png"),
        text: 'Soft Drink'
    },

    {
        id: 3,
        image: require("../../assets/images/bread.png"),
        text: 'Bakery Items'
    },
    {
        id: 4,
        image: require("../../assets/images/fast-food.png"),
        text: 'Fast-Foods'
    },
    {
        id: 5,
        image: require("../../assets/images/deals.png"),
        text: 'Deals'
    },
    {
        id: 6,
        image: require("../../assets/images/coffee.png"),
        text: 'Coffee & Tea'
    },
    {
        id: 7,
        image: require("../../assets/images/desserts.png"),
        text: 'Deserts'
    },
]

const Catagories = () => {
    return (
        <View style={{ marginVertical: 8, backgroundColor: 'white' }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={({ item }) => (
                    <View
                        style={{
                            paddingVertical: 10,
                            paddingLeft: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                height: 40,
                                width: 40
                            }}
                            source={item.image} resizeMode='contain' />
                        <Text style={{
                            fontWeight: 'bold'
                        }}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Catagories

const styles = StyleSheet.create({})