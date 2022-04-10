import { View, Text } from 'react-native'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurentDetails from './screens/RestaurentDetails';
import configureStore from './redux/store';

const store = configureStore();


const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        <ReduxProvider store={store}>

            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={screenOptions} />
                    <Stack.Screen name="Details" component={RestaurentDetails} options={screenOptions} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default RootNavigation