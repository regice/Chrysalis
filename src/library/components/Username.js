import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Username extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Text style={styles.usernameText}>@ultrafauna</Text>
        );
    }
}

const styles = StyleSheet.create({
    usernameText: {
        color: '#000000',
        fontSize: 15
    }
});