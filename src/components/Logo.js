import React from 'react';
import {Image, StyleSheet,} from 'react-native';
const Logo = () => {
    return(
        <Image source={require('../../assets/logo.png')} style={styles.imagem}></Image>
    )
}

const styles = StyleSheet.create({
    imagem:{
        marginTop: 20,
    }
})

export default Logo