import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Isso irá desativar todos os avisos amarelos

export default function Clock() {
  const navigation = useNavigation();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <View style={styles.headerContent}>
        <Image style={styles.imagemFuturo} source={require('../../../assets/logoFuturo.png')} />
        <Text style={styles.message}>Bater o ponto</Text>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -30.041299,
            longitude: -51.225820,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        <Marker
          coordinate={{ latitude: -30.041299, longitude: -51.225820 }}
          title="Instituto Caldeira"
          description="Localização do Instituto Caldeira"
        />
        </MapView>

        <View style={styles.textDatas}>
          <Text style={styles.text}>{`Data: ${day}/${month}/${year}`}</Text>
          <Text style={styles.text}>{`Hora: ${hour}:${minute}:${second}`}</Text>
        </View>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('humor')}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('ajustarPonto')}>
          <Text style={styles.buttonText}>Ajustar ponto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('historicoPonto')}>
          <Text style={styles.buttonText}>Histórico Ponto</Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 20 }} />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FABD7B',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  map: {
    flex: 1,
    height: 10,
  },
  textDatas: {
    marginTop: 10, // Ajuste o valor conforme desejado
    textAlign: 'center',
    alignItems: 'center', // Centralize horizontalmente
  },
  button: {
    backgroundColor: '#132F48',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  imagemFuturo: {
    width: 50,
    height: 50
  },
  headerContent: {
    flexDirection: 'row', // Organiza o texto e a imagem em uma linha
    alignItems: 'center', // Centraliza verticalmente
  }
});
