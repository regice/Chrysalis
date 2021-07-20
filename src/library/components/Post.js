import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Username } from './Username';
import { DisplayName } from './DisplayName';
import { Content } from './Content';

export class Post extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}></View> 
                <View>
                    <View style={styles.userContainer}>
                        <DisplayName></DisplayName>
                        <Username></Username>
                    </View>
                    <View style={styles.contentContainer}>
                        <Content></Content>
                    </View>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#42a4f5',
        flex: 1,
        flexBasis: 100,
        minHeight: 90,
        borderTopWidth: 1,
        borderTopColor: '#b6c6e0',
        flexDirection: 'row'
    },
    iconContainer: {
        margin: 10,
        height: 75,
        width: 75,
        backgroundColor: '#9ccef7'
    },
    userContainer: {
        marginTop: 10,
        marginRight: 10,
        flexDirection: 'row',
    },
    displayNameContainer: {

    },
    usernameContainer: {

    },
    contentContainer: {

    }
});