import React from 'react';
import {Text, StyleSheet} from 'react-native';
const Cronometro = () => {
    return(
        <Text style={styles.cronometro}>00:00:00</Text>
    )
}

const styles = StyleSheet.create({
    cronometro: {
        marginTop: 30,
        fontSize: 46,
    }
})

export default Cronometro