import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from './src/screens/main/feed/FeedScreen';

const Stack = createStackNavigator();

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (    
            <NavigationContainer >      
                <Stack.Navigator 
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#43ccff'
                        },
                        headerTintColor: '#ffffff'
                    }}
                >
                    <Stack.Screen name="Feed" component={FeedScreen} />
                </Stack.Navigator>
            </NavigationContainer>  
        );
    }
}

export default App;