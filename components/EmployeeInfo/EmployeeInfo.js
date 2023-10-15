import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function EmployeeInfo() {

    const employeeName = 'Gabriel';
    const employeeNumber = 81;

    return (
        <View style={styles.container}>
            <View style={styles.employeeNameContainer}>
                <Text style={styles.employeeText}>{`Olá, ${employeeName}`}</Text>
                <Text style={styles.employeeSubtitleText}>Seja bem-vindo</Text>
            </View>
            <View style={styles.employeeNumberContainer}>
                <Text style={styles.employeeNumberTitleText}>Matrícula</Text>
                <Text style={styles.employeeNumberText}>{`00${employeeNumber}`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        height: 120,
        flexDirection: "row"
    },

    employeeNameContainer: {
        width: "50%",
        padding: 30
    },

    employeeText: {
        color: "#132F48",
        fontSize: 20,
        fontWeight: "bold"
    },

    employeeSubtitleText: {
        color: "#132F48",
        fontSize: 15
    },

    employeeNumberContainer: {
        width: "50%",
        alignItems: "flex-end",
        padding: 30
    },

    employeeNumberTitleText: {
        color: "#132F48",
        fontSize: 16
    },

    employeeNumberText: {
        color: "#132F48",
        fontSize: 20,
        fontWeight: "bold"
    }
});