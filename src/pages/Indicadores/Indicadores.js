import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BarChart } from 'react-native-chart-kit';

import MainContainer from '../../../components/MainContainer/MainContainer';
import EmployeeInfo from '../../../components/EmployeeInfo/EmployeeInfo';

export default function IndicadoresDePonto() {
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                data: [8, 12, 10, 15, 9], // Exemplo: dados de indicadores de ponto
            },
        ],
    };

    return (
        <View style={styles.container}>
            <MainContainer
                CustomView={
                    <Animatable.View animation="fadeInRight" delay={500} style={styles.subContainer}>
                        <EmployeeInfo />
                        <Text style={styles.title}>Indicadores de Ponto</Text>
                        <BarChart
                            data={data}
                            width={300}
                            height={200}
                            yAxisLabel="Pts"
                            chartConfig={{
                                backgroundGradientFrom: '#fff',
                                backgroundGradientTo: '#fff',
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                propsForDots: { r: '6' },
                            }}
                        />
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
});
