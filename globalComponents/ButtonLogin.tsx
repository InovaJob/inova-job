import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { DimensionValue } from 'react-native';

const { width, height } = Dimensions.get('window');

import { buttonProps } from '@/interfaces/componentInterfaces/ButtonProps';

export const GlobalButtonLogin: React.FC<buttonProps> = ({ widthProp, fontWeightProp }) => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.entrar, { width: widthProp }]}
                activeOpacity={0.7}
                onPress={() => navigation.push('/login-screen')}
            >
                <Text style={[styles.textButton, { fontWeight: fontWeightProp }]}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    entrar: {
        backgroundColor: '#3E5C76',
        borderRadius: 8,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: width * 0.04,
        color: '#fff',
        textAlign: 'center',
    },
});

