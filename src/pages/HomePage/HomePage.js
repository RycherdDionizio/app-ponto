import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MainContainer from '../../../components/MainContainer/MainContainer';
import EmployeeInfo from '../../../components/EmployeeInfo/EmployeeInfo';
import { Text,
         View,
         StyleSheet,
         Image,
         TouchableOpacity
        } from 'react-native';


export default function HomePage() {

  const navigation = useNavigation();

    return (
        <View>
            <MainContainer
              CustomView={
                <Animatable.View animation="fadeInRight" delay={500} style={styles.SubContainer}>
                  <EmployeeInfo/>
                  
                  <View style={styles.NavigationContainer}>
                    <View style={styles.NavigationButton}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('RegistrarPonto')}
                        style={styles.Button}>
                        <View style={styles.ImageButton}>
                          <Image
                            style={{height:50, width:50}}
                            source={require('../../../assets/clicando.png')}/>
                        </View>
                        <Text style={styles.TextButton}>Registrar Ponto</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.NavigationButton}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ajustarPonto')}
                        style={styles.Button}>
                        <View style={styles.ImageButton}>
                          <Image
                            style={{height:40, width:40}}
                            source={require('../../../assets/ajustar.png')}/>
                        </View>
                        <Text style={styles.TextButton}>Ajustar Ponto</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.NavigationButton}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('historicoPonto')}
                        style={styles.Button}>
                        <View style={styles.ImageButton}>
                          <Image
                            style={{height:60, width:60}}
                            source={require('../../../assets/cartaoponto.png')}/>
                        </View>
                        <Text style={styles.TextButton}>Cartão Ponto</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.NavigationButton}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                        style={styles.Button}>
                        <View style={styles.ImageButton}>
                          <Image
                            style={{height:50, width:50}}
                            source={require('../../../assets/indicadores.png')}/>
                        </View>
                        <Text style={styles.TextButton}>Indicadores</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.NavigationButton}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                        style={styles.Button}>
                        <View style={styles.ImageButton}>
                          <Image
                            style={{height:50, width:50, }}
                            source={require('../../../assets/dadoscadastrais.png')}/>
                        </View>
                        <Text style={styles.TextButton}>Dados Cadastrais</Text>
                      </TouchableOpacity>
                    </View>
                  
                  </View>

                </Animatable.View>
              }
            />            
        </View>
    )
}

const styles = StyleSheet.create({
  SubContainer: {
    backgroundColor: "#FFFFFF",
    width:"100%",
    height: "100%",
    borderRadius: 50
  },

  NavigationContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
  },

  NavigationButton: {
    padding: 20,
    width: "80%",
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#132F48",
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: "center"
  },

  Button: {
    justifyContent: 'center',
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 10,
    width: "100%",
    height: "100%",
    flexDirection: 'row'
  },

  ImageButton: {
    padding: 50,
    backgroundColor: "#132F48",
    width: "40%",
    height: "100%",
    marginRight: 10,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50
  },

  TextButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#132F48",
    width: "70%",
    textAlign: "center"
  }
})