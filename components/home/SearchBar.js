import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, AntDesign } from '@expo/vector-icons';

const SearchBar = ({ cityHandler }) => {
    const [location, setLocation] = useState('');
    return (
        <View style={{
            marginTop: 15,
            flexDirection: 'row'
        }}>
            <View style={{
                width: '100%',
                height: 50,
                borderRadius: 30,
                backgroundColor: '#eee',
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <View style={{
                    marginHorizontal: 10
                }}>
                    <Ionicons name="location-sharp" size={24} color="black" />

                </View>
                <TextInput
                    value={location}
                    onChangeText={setLocation}
                    style={{
                        flex: 1,
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginRight: 10
                    }}
                    placeholder='Search'
                />
                <Pressable
                    onPress={() => { cityHandler(location) }}
                    style={styles.rightButton}>
                    <AntDesign name="clockcircle" size={15} color="black" />
                    <Text style={{
                        marginLeft: 6,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>Search</Text>

                </Pressable>

            </View>
            {/* <GooglePlacesAutocomplete
                // query={{ key: 'AIzaSyA9IPZFeRrAILT1SPOnHXIL7C-Pq9b1MaA' }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        flexDirection: 'row',
                        borderRadius: 50,
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}
                renderLeftButton={() =>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Ionicons name="location-sharp" size={24} color="black" />
                    </View>
                }
                renderRightButton={() =>
                    <View style={styles.rightButton}>
                        <AntDesign name="clockcircle" size={15} color="black" />
                        <Text style={{
                            marginLeft: 6,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Search</Text>

                    </View>
                }

            /> */}
        </View >
    )
}
const styles = StyleSheet.create({
    rightButton: {
        marginRight: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        borderRadius: 20,
        marginLeft: 'auto'
    },
})

export default SearchBar