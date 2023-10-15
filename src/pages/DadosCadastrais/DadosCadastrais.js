import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import MainContainer from '../../../components/MainContainer/MainContainer';
import EmployeeInfo from '../../../components/EmployeeInfo/EmployeeInfo';

export default function DadosCadastrais() {
    // Exemplo de dados cadastrais
    const dadosCadastrais = {
        nome: 'João da Silva',
        matricula: '12345',
        setor: 'Recursos Humanos',
        cargo: 'Analista de RH',
        email: 'joao.silva@example.com',
        telefone: '(11) 1234-5678',
    };

    // URL da foto do usuário
    const fotoUrl = 'URL_DA_FOTO_DO_USUARIO';

    return (
        <View style={styles.container}>
            <MainContainer
                CustomView={
                    <Animatable.View animation="fadeInRight" delay={500} style={styles.subContainer}>
                        <EmployeeInfo />
                        <Text style={styles.title}>Dados Cadastrais</Text>
                        <View style={styles.dadosContainer}>
                            <Image source={require('../../../assets/pessoa.png')} style={styles.foto} />
                            <View>
                                <Text style={styles.label}>Nome:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.nome}</Text>

                                <Text style={styles.label}>Matrícula:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.matricula}</Text>

                                <Text style={styles.label}>Setor:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.setor}</Text>

                                <Text style={styles.label}>Cargo:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.cargo}</Text>

                                <Text style={styles.label}>Email:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.email}</Text>

                                <Text style={styles.label}>Telefone:</Text>
                                <Text style={styles.dados}>{dadosCadastrais.telefone}</Text>
                            </View>
                        </View>
                    </Animatable.View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    dadosContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
    },
    dados: {
        marginBottom: 10,
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
});
