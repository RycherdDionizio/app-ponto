import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Image,
         View,
         Text,
         StyleSheet,
         TouchableOpacity
        } from 'react-native';

export default function Wellcome() {
    
    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../../assets/Logomarca_Futuro_branca.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.sloganText}>
                    Central do Colaborador
                </Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SigIn')}
                    >
                    <Text style={styles.textButton}>Avançar</Text>
                </TouchableOpacity>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#132F48",
        width: "100%",
        height: "100%"
    },

    containerLogo:{
        marginTop: "40%",
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center"
    },

    logoImage: {
        width: "100%",
        height: "100%",
        resizeMode: 'center',
      },

      sloganText: {
        color:"#FFFFFF", 
        fontSize: 30,  
        padding:5,
        paddingLeft: 20,
        width:"90%",
        textAlign: "center"
      },

      containerButton: {
        marginTop: "20%",
        width: "100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center"
      },

      button: {
        backgroundColor: "#FFFFFF",
        width: "90%",
        alignItems: "center",
        borderRadius: 5
      },

      textButton: {
        color: "#132F48",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
      }
      
})