import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const MoodPopup = ({ isVisible, onClose }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (successMessageVisible) {
      // Esconda a mensagem de sucesso após 2 segundos
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
        // Navegue de volta para a tela de batidas
        navigation.navigate('MarcaPonto'); // Substitua 'Batidas' pelo nome da sua tela de batidas
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessageVisible]);

  const moods = [
    { name: 'Muito Triste', emoji: '😢' },
    { name: 'Triste', emoji: '😞' },
    { name: 'Neutro', emoji: '😐' },
    { name: 'Feliz', emoji: '😊' },
    { name: 'Muito Feliz', emoji: '😄' },
  ];

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    onMoodSelected(mood);

    // Mostrar a mensagem de sucesso
    setSuccessMessageVisible(true);
  };
  const onMoodSelected = (mood) => {
    // Esta função pode ser personalizada para fazer algo com o humor selecionado.
    console.log('Mood selecionado:', mood);
  
    // Por exemplo, você pode enviá-lo para um servidor ou armazená-lo localmente.
    // Também é possível executar qualquer outra lógica que desejar.
  };
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>Escolha o seu humor</Text>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodOption,
                selectedMood === mood && styles.selectedMoodOption,
              ]}
              onPress={() => handleMoodSelection(mood)}
            >
              <Text style={styles.emoji}>{mood.emoji}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.successMessage}>
            {successMessageVisible && 'Ponto batido com sucesso'}
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#FFF',
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moodOption: {
    padding: 10,
  },
  selectedMoodOption: {
    backgroundColor: '#FABD7B',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#FABD7B',
    padding: 10,
    borderRadius: 5,
  },
  emoji: {
    fontSize: 30,
  },
  successMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
  },
});

export default MoodPopup;
