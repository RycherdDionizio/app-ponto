import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const pointsData = [
  { id: '1', date: '2023-10-01', time: '09:00 AM', type: 'Entrada' },
  { id: '2', date: '2023-10-01', time: '01:00 PM', type: 'Saída para almoço' },
  { id: '3', date: '2023-10-01', time: '02:00 PM', type: 'Retorno do almoço' },
  { id: '4', date: '2023-10-01', time: '06:00 PM', type: 'Saída' },
  { id: '5', date: '2023-10-02', time: '08:30 AM', type: 'Entrada' },
  { id: '6', date: '2023-10-02', time: '12:30 PM', type: 'Saída para almoço' },
  // Adicione mais pontos fictícios conforme necessário
];

export default function PointListScreen() {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <View style={styles.headerContent}>
        <Image style={styles.imagemFuturo} source={require('../../../assets/logoFuturo.png')} />
          <Text style={styles.message}>Cartão Ponto</Text>
        </View>
      </Animatable.View>
  
      <FlatList
        style={styles.containerForm}
        data={pointsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.pointItem}>
            <Text style={styles.textList}>{item.date}</Text>
            <Text style={styles.textList}>{item.time}</Text>
            <Text style={styles.textList}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132F48',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  headerContent: {
    flexDirection: 'row', // Organiza o texto e a imagem em uma linha
    alignItems: 'center', // Centraliza verticalmente
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 35,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20
  },
  pointItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 12,
  },
  textList: {
    fontSize: 16,
    width: 100, // Largura fixa para centralizar o texto
    textAlign: 'center', // Centraliza o texto
  },
  imagemFuturo: {
    width: 50,
    height: 50
  }
});
