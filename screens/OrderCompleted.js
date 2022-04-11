import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItem from '../components/restaurentDetail/MenuItem';
import { db } from '../firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';

const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        title: 'Bologna',
        description: 'Nothing to show',
        price: '$4545',
        image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    })

    const { items, restaurentName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    let totalUSD = total.toLocaleString("en-US", { style: "currency", currency: "USD" });

    useEffect(() => {
        // const unsubscribe = db.collection('orders').orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
        //     setLastOrder(doc.data());
        // });
        // return unsubscribe();

        // onSnapshot(doc(db, 'orders', restaurentName), (snapshot) => {
        //     setLastOrder(snapshot.items)
        //     console.log(lastOrder)
        // })

        const ref = doc(db, 'orders', restaurentName)
        const unsubscribe = onSnapshot(ref, doc => {
            setLastOrder(doc.data())
        });
        return () => unsubscribe();
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: 'white',
        }}>
            < View style={{
                margin: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30
            }}>
                <LottieView
                    style={{ height: 100, alignItems: 'center', marginBottom: 30 }}
                    source={require("../assets/animations/check-done.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>Your Order at {restaurentName} has been placed for {`$${totalUSD}`}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <MenuItem foods={lastOrder.item} hideCheckBox={true} />
                    <LottieView
                        style={{ height: 200, alignItems: 'center', marginBottom: 100 }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View >
        </SafeAreaView >
    )
}

export default OrderCompleted

const styles = StyleSheet.create({})