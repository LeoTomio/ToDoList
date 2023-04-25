import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default function Tarefa({ data }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name="trash" size={20} color="#22272e" />
            </TouchableOpacity>
            <Text >{data.item}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        marginTop: 12,
        padding: 12,
        borderRadius: 10,
        flexDirection: 'row'
    },
    button: {
        marginRight: 8
    }
})