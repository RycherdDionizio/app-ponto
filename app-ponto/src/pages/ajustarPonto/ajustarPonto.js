import React from 'react';
import { View,
          Text,
          StyleSheet,
          Image,
          TouchableOpacity,
          TextInput}
          from 'react-native';
import { useState } from 'react';



export default function ajustarPonto() {

  return (        
        
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.titleText}>Ajustar Ponto</Text>
          </View>

            
          <View style={styles.containerForm}>
            
            
            <View style={styles.containerView}>

              <View style={styles.timeInput}>
                <Text style={{fontSize: 16}}>Entrada:</Text>
                <TextInput
                  keyboardType={"numeric"}
                  editable
                  numberOfLines={2}
                  maxLength={5}
                  style={styles.Input}
                />
              </View>

              <View style={styles.timeInput}>
                <Text style={{fontSize: 16}}>Saída:</Text>
                <TextInput
                  keyboardType={"numeric"}
                  editable
                  numberOfLines={2}
                  maxLength={5}
                  style={styles.Input}
                />
              </View>

              <View style={styles.timeInput}>
                <Text style={{fontSize: 16}}>Entrada:</Text>
                <TextInput
                  keyboardType={"numeric"}
                  editable
                  numberOfLines={2}
                  maxLength={5}
                  style={styles.Input}
                />
              </View>

              <View style={styles.timeInput}>
                <Text style={{fontSize: 16}}>Saída:</Text>
                <TextInput
                  keyboardType={"numeric"}
                  editable
                  numberOfLines={2}
                  maxLength={5}
                  style={styles.Input}
                />
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ajustar</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FABD7B',
  },

  header: {
    marginTop: '15%',
    marginBottom: '5%',
    alignSelf: 'flex-start',
    marginStart: '5%',
  },

  containerForm:{
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: '100%',
  },

  titleText:{
    alignItems: 'flex-start',
    marginTop: '14%',
    marginBottom: '8%',
    marginStart: '5%',
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  containerView:{
    alignItems: 'center',
  },

  timeInput:{
    marginTop: '10%',
    width: '90%',
  },

  Input:{
    borderEndWidth : 1,
    borderBottomWidth : 1,
  },

  button: {
    backgroundColor: "#132F48",
    width: '90%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  }
})

