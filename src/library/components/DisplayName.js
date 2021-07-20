import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class DisplayName extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Text style={styles.displayNameText}>Mountain Simp</Text>
        );
    }
}

const styles = StyleSheet.create({
    displayNameText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});