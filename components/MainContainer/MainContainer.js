import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../Logo/Logo';

export default function MainContainer(Param) {
    return(
        <View style={styles.MainContainer}>
            <Logo/>
            {Param.CustomView}
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#132F48",
        width: "100%",
        height: "100%"
    }
})