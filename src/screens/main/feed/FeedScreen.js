//import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Post } from 'library/components/Post'; 

class FeedScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.main}>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </ScrollView>
                <View style={styles.nav}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: '#43ccff',
        flexBasis: 85,
        flexGrow: 0,
        flexShrink: 0
    },
    main: {
        backgroundColor: '#0f0f0f',
        flex: 1,
        flexBasis: 425,
        flexGrow: 1,
        flexShrink: 1
    },
    nav: {
        backgroundColor: '#43ccff',
        flexBasis: 85,
        flexGrow: 0,
        flexShrink: 0,
    },
    logoDummy: {
        justifyContent: 'flex-end',
        alignSelf: 'center',
    }
});

export default FeedScreen;