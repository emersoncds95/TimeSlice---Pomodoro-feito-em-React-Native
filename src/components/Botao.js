import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
const Botao = () => {
    return(
        <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>iniciar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#4DFFDF',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 8,
        marginTop: 16,
    },
    textoBotao: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Botao