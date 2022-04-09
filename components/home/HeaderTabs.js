import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = ({ activeTab, setActiveTab }) => {
    // const [activeTab, setActiveTab] = useState('Delivery')
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: activeTab === 'Delivery' ? 'black' : 'white' }]}
                onPress={() => { setActiveTab('Delivery') }}
            >
                <Text style={[styles.text, { color: activeTab === 'Delivery' ? 'white' : 'black' }]}>Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: activeTab === 'pickup' ? 'black' : 'white' }]}
                onPress={() => { setActiveTab('pickup') }}
            >
                <Text style={[styles.text, { color: activeTab === 'pickup' ? 'white' : 'black' }]}>Pickup</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HeaderTabs

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    text: {

        fontWeight: 'bold',
        fontSize: 15
    }

})