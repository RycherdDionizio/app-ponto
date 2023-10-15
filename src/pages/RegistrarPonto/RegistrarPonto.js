import React, { useState, useEffect } from 'react';
import MainContainer from '../../../components/MainContainer/MainContainer';
import EmployeeInfo from '../../../components/EmployeeInfo/EmployeeInfo';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function() {
  const navigation = useNavigation();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (text, length) => {
    return text.toString().padStart(length, '0');
  };

  const date = `${pad(currentTime.getDate(), 2)}/${pad(currentTime.getMonth() + 1, 2)}/${currentTime.getFullYear()}`;
  const time = `${pad(currentTime.getHours(), 2)}:${pad(currentTime.getMinutes(), 2)}:${pad(currentTime.getSeconds(), 2)}`;

  return (
    <View>
      <MainContainer
        CustomView={
          <Animatable.View animation="fadeInRight" delay={500} style={styles.SubContainer}>
            <EmployeeInfo/>

            <View style={styles.BorderMapContainer}>
              <MapView 
                style={styles.MapContainer}
                initialRegion={{latitude: -30.041299, longitude: -51.225820, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}>
              <Marker
                coordinate={{latitude: -30.041299, longitude: -51.225820}}
                title="Futuro Previdência"
                description="Localização da Futuro Previdência"
              />
              </MapView>
            </View>

            <View style={styles.DateTimeContainer}>
              <Text style={styles.DateTimeText}>{`Data: ${date}`}</Text>
              <Text style={styles.DateTimeText}>{`Hora: ${time}`}</Text>
            </View>
            
            <View style={styles.ContainerButton}>
              <TouchableOpacity style={styles.Button}
               onPress={() => navigation.navigate('humor')}>
                <Text style={styles.TextButton}>Registrar Ponto</Text>
              </TouchableOpacity>
            </View>
          
          </Animatable.View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SubContainer: {
    backgroundColor: "#FFFFFF",
    width:"100%",
    height: "100%",
    borderRadius: 50,
    alignItems: "center"
  },

  BorderMapContainer: {
    alignItems: "center",
    width: "90%",
    height: 350,
    borderRadius: 5000
  },

  MapContainer: {
    flex: 1,
    width: "100%"
  },

  DateTimeContainer: {
    width: "90%",
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  DateTimeText: {
    fontSize: 18
  },

  ContainerButton: {
    marginBottom: 30,
    width: "90%",
    height: 250
  },

  Button: {
    backgroundColor: '#132F48',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
  },

  TextButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
