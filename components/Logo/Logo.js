import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Logo() {
    return (
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/Futuro_Arvore_branca.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.sloganText}>
                    Central do Colaborador
                </Text>
            </View>

        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 150
    },

    containerLogo:{
        marginTop: "3%",
        width: "100%",
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    
    logoImage: {
        width: "100%",
        height: "80%",
        resizeMode: 'center',
      },
    
      sloganText: {
        color:"#FFFFFF", 
        fontSize: 16,  
        padding:5,
        paddingLeft: 20,
        width:"90%",
        textAlign: "center"
      },
})