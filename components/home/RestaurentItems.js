import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const RestaurentItems = ({ restaurentData }) => {
    return (
        <FlatList
            data={restaurentData}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.mainContainer}>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={{ uri: item.image_url }}
                    />
                    <TouchableOpacity
                        style={styles.favorite}>
                        <AntDesign name="hearto" size={20} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>35-49 • min</Text>

                    <View style={styles.rating}>
                        <Text style={{
                            fontSize: 12
                        }}>{item.rating}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default RestaurentItems

const styles = StyleSheet.create({
    mainContainer: {
        height: 270,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 15
    },
    image: {
        height: 200,
        borderRadius: 12
    },
    favorite: {
        position: 'absolute',
        right: 30,
        top: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
    },
    name: {
        paddingTop: 8,
        fontSize: 17,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 15,
        color: 'grey'
    },
    rating: {
        height: 30,
        width: 30,
        position: 'absolute',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 12,
        right: 18,
        backgroundColor: '#eee'
    }
})