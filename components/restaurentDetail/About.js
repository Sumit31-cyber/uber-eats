import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = (props) => {
    const { name, image, price, rating, reviews, categories } = props.route.params;
    const formattedCatagories = categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCatagories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ • ${reviews}`
    return (
        <View >
            <Image
                style={{
                    height: 220,
                }}
                resizeMode='cover'
                source={{ uri: image }}
            />
            <Text style={{
                fontSize: 25, fontWeight: '600', marginTop: 10, marginHorizontal: 15
            }}>{name}</Text>
            <Text style={{
                fontSize: 15.5, fontWeight: '600', marginTop: 5, marginHorizontal: 15
            }}>{description}</Text>
        </View >
    )
}

export default About

const styles = StyleSheet.create({})