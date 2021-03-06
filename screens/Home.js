import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Catagories from '../components/home/Catagories'
import RestaurentItems from '../components/home/RestaurentItems'
import BottomTab from '../components/home/BottomTab'
import { Divider } from 'react-native-elements';
import FocusedStatusBar from '../components/restaurentDetail/FocusedStatusBar'

const YELP_API_KEY = 'BFCh_SQAE1HTIKeoKgWIG7EYZ0x3CbZtRmxW2l25OxEdtocKLsDJrNamGQALn6zBKo12fsOLKgCEyPAJlXL3mxjRvqzGPJeBgbEkSotSsbsShlX6OSWcmU5fjVpRYnYx';

const Home = ({ navigation }) => {
    const [restaurentData, setRestaurentData] = useState([]);
    const [city, setCity] = useState('sanfrancisco')
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurentFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurent&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        }
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(json => setRestaurentData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    }
    useEffect(() => {
        getRestaurentFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={{
                backgroundColor: 'white',
                backgroundColor: 'white',
                padding: 15
            }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Catagories />
                <RestaurentItems restaurentData={restaurentData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTab />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
}) 