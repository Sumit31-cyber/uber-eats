import { Image, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckBox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'


const MenuItem = ({ restaurentName, foods, hideCheckBox, marginLeft }) => {

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
            data={foods}
            renderItem={({ item }) => (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContainer}>
                        {hideCheckBox ? (<></>) : <BouncyCheckBox
                            onPress={(checkBoxValue) => selectedItem(item, checkBoxValue)}
                            isChecked={isFoodInCart(item, cartItems)}
                            fillColor='#4D8C37'
                            iconStyle={{
                                borderColor: 'lightgrey',
                                borderRadius: 0,
                            }}
                        />}
                        <View style={{
                            width: 240,
                            justifyContent: 'space-evenly'

                        }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc} </Text>
                            <Text style={styles.desc}>{item.price}</Text>
                        </View>
                        <Image
                            marginLeft={marginLeft ? marginLeft : 0}
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