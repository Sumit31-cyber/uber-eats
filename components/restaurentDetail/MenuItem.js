import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

const image = 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

const data = [{
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



const MenuItem = ({ restaurentName }) => {

    const dispatch = useDispatch();
    const selectedItem = (item, checkBoxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurentName: restaurentName, checkBoxValue: checkBoxValue }
    })

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    )

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));


    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        <BouncyCheckBox
                            onPress={(checkBoxValue) => selectedItem(item, checkBoxValue)}
                            isChecked={isFoodInCart(item, cartItems)}
                            fillColor='#4D8C37'
                            iconStyle={{
                                borderColor: 'lightgrey',
                                borderRadius: 0,
                            }}
                        />
                        <View style={{
                            width: 240,
                            justifyContent: 'space-evenly'

                        }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc} </Text>
                            <Text style={styles.desc}>{item.price}</Text>
                        </View>
                        <Image
                            style={styles.image}
                            resizeMode='cover'
                            source={{ uri: item.image }}
                        />
                    </View>
                    <Divider width={0.9} style={{ marginHorizontal: 20 }} />
                </ScrollView>

            )}
        />


    )
}

export default MenuItem

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    title: {
        fontSize: 19,
        fontWeight: '700',
    },
    desc: {
        fontSize: 15,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 12,

    }
})