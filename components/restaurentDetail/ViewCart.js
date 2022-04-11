import { StyleSheet, Text, TouchableOpacity, View, Modal, } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItems from './OrderItems'
import { db } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'
import LottieView from "lottie-react-native"

const ViewCart = ({ navigation }) => {
    const [ModalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false);


    const { items, restaurentName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    let totalUSD = total.toLocaleString("en-US", { style: "currency", currency: "USD" });

    const addOrderToFirebase = () => {
        setLoading(true)
        const myDoc = doc(db, 'orders', restaurentName)
        const date = new Date()
        const docData = {
            item: items,
            restaurentName: restaurentName,
            createdAt: date
        }
        setDoc(myDoc, docData).then(() => {
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('OrderCompleted')
            }, 2500)
        }).catch((error) => {
            alert(error.message)
        })
        // navigation.navigate("OrderCompleted")

    }


    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        modalCheckoutContainer: {
            backgroundColor: '#fff',
            padding: 16,
            height: 500,
            borderWidth: 1
        },
        redtaurentName: {
            textAlign: 'center',
            fontWeight: '700',
            color: 'black',
            fontSize: 18,
            marginBottom: 10
        },
        subTotalContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
        },
        subTotalText: {
            textAlign: 'left',
            fontWeight: '700',
            fontSize: 15,
            marginBottom: 10,
        }
    })

    const checkoutModelContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.redtaurentName}>{restaurentName}</Text>
                        {items.map((item, index) => (
                            <OrderItems key={index} item={item} />
                        ))}
                        <View style={styles.subTotalContainer}>
                            <Text style={styles.subTotalText}>Suntotal</Text>
                            <Text style={styles.subTotalText}>{`$${totalUSD}`}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    addOrderToFirebase();
                                    setModalVisible(false);
                                }}
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: 'relative',
                                    flexDirection: 'row'
                                }}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Checkout</Text>
                                <Text style={{ color: '#fff', fontSize: 15, position: 'absolute', right: 10 }}>{total ? `$${totalUSD}` : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    console.log(totalUSD);
    return (
        <>
            <Modal animationType='slide' visible={ModalVisible} transparent={true} onRequestClose={() => setModalVisible(false)} >
                {checkoutModelContent()}
            </Modal>
            {total ? (<View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                bottom: 20,
                position: 'absolute',
                zIndex: 999
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            padding: 15,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative'
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            marginRight: 50
                        }}>View Cart</Text>
                        <Text style={{ color: 'white', fontSize: 18, }}>{'$' + totalUSD}</Text>
                    </TouchableOpacity>
                </View>
            </View>) : null}
            {loading ? <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'absolute',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <LottieView style={{
                    height: 200
                }}
                    source={require('../../assets/animations/scanner.json')}
                    autoPlay
                    speed={3}
                />

            </View> : <></>}
        </>
    )
}

export default ViewCart
