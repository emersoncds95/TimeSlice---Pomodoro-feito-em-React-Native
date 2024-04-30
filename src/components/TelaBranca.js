import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Logo from './Logo';
import Cronometro from './Cronometro';
import Botao from './Botao';
const TelaBranca = () => {
    return(
        <SafeAreaView  style={styles.tela}>
            <Logo style={styles.logo} />
            <Cronometro />
            <Botao />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    tela: {
        backgroundColor: "#fff",
        height: 680,
        width: 320,
        borderRadius: 16,
        alignItems: 'center'
    }
})

export default TelaBranca