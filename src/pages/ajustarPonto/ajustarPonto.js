import React from 'react';
import { View,
          Text,
          StyleSheet,
          TouchableOpacity,
          TextInput,
          Image}
          from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function ajustarPonto() {

  return (        
        
        <View style={styles.container}>

        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <View style={styles.headerContent}>
          <Image style={styles.imagemFuturo} source={require('../../../assets/logoFuturo.png')} />
            <Text style={styles.message}>Lista de Pontos Batidos</Text>
          </View>
      </Animatable.View>

            
          <View style={styles.containerForm}>            
            
            <View style={styles.containerView}>
              <View style={styles.totalizadorContainer}>
                <View style={styles.totalizadorView}>
                  <Text style={{fontSize:16}}>Total de Horas:</Text>
                  <Text style={{fontSize:40, fontWeight:'bold'}}>08:00</Text>
                </View>

                <View style={styles.totalizadorView}>
                  <Text style={{fontSize:16}}>Horas Extras:</Text>
                  <Text style={{fontSize:40, fontWeight:'bold'}}>00:00</Text>
                </View>
              </View>

              <View style={styles.timeInput}>
                <TextInput
                  editable={true}
                  numberOfLines={2}
                  value='09/10/2023 | 18:00 - Saída'
                  style={styles.Input}
                />
              </View>
              <View style={styles.timeInput}>
                <TextInput
                  editable={true}
                  numberOfLines={2}
                  value='09/10/2023 | 13:30 - Entrada'
                  style={styles.Input}
                />
              </View>
              <View style={styles.timeInput}>
                <TextInput
                  editable={true}
                  numberOfLines={2}
                  value='09/10/2023 | 12:00 - Saída'
                  style={styles.Input}
                />
              </View>
              <View style={styles.timeInput}>
                <TextInput
                  editable={true}
                  numberOfLines={2}
                  value='09/10/2023 | 08:00 - Entrada'
                  style={styles.Input}
                />
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tela de Inclusão</Text>
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
  headerContent: {
    flexDirection: 'row', // Organiza o texto e a imagem em uma linha
    alignItems: 'center', // Centraliza verticalmente
  },
  totalizadorContainer:{
    display: 'flex'
  },

  totalizadorView:{
    marginTop: '5%',
    width: '90%',
  },

  timeInput:{
    marginTop: '10%',
    width: '90%',
  },

  Input:{
    borderEndWidth : 1,
    borderBottomWidth : 1,
    fontSize: 20,
    color: '#333'
  },

  button: {
    backgroundColor: "#132F48",
    width: '90%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  imagemFuturo: {
    width: 50,
    height: 50
  }
})

