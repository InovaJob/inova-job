import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Br = () => <Text>{'\n'}</Text>;
const { width, height } = Dimensions.get('window');

export const ButtonsInitialScreen = () => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textArea}>
                    <Text style={styles.text1}> Olá! Seja bem vindo(a)!</Text>
                    <View style={styles.breakText}>
                        <Text style={styles.text2}>A melhor plataforma virtual</Text>
                        <Text style={styles.text2}>para vagas de emprego</Text>
                    </View>
                </View>
                <View style={styles.buttonsArea}>
                    <TouchableOpacity style={styles.entrar} activeOpacity={0.7} onPress={() => navigation.push('/login-screen')}>
                        <Text style={styles.textButton}>entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.criarConta} activeOpacity={0.7}>
                        <Text style={styles.textButtonCPF}>cadastre-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cadastroCNPJ} activeOpacity={0.7}>
                        <Text style={styles.textButtonCNPJ}>cadastrar empresa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        gap: height *  0.01
    },
    breakText: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonsArea: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 16,
        gap: '5%',
        marginTop: '-20%'
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: width * 0.06,
    },
    text2: {
        color: '#A3B5C1',
        fontWeight: '500',
        fontSize: width * 0.05,
        textAlign: 'center',
    },


    textButton: {
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    textButtonCPF: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#3E5C76',
        width: '100%'
    },
    textButtonCNPJ: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#3E5C76',
        width: '100%'
    },



    entrar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E5C76',
        borderRadius: 8,
        height: height * 0.05,
        width: '100%'
    },
    criarConta: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: height * 0.05,
        width: '100%',
    },
    cadastroCNPJ: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        height: height * 0.05,
        width: '100%'
    }
});

